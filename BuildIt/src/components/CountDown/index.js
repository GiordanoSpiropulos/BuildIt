import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { TimerContainer, TimerText } from './styles';

const CountDown = (props, ref) => {
  const [count, setCount] = useState(props.time);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) clearInterval(interval);
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    addTimeUp: (time) => {
      if (count + time < 60) return setCount(count + time);
    },
  }));

  return (
    <>
      {count > 0 ? (
        <TimerContainer>
          <TimerText>
            {!props.isTime ? count : `00:${count.toString().padStart(2, '0')}`}
          </TimerText>
        </TimerContainer>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};

export default forwardRef(CountDown);
