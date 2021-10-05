import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { TimerText, TimerContainer } from './styles';

const Timer = (props, ref) => {
  const [[hrs, mins, secs], setTime] = useState([0, 0, 0]);
  const paused = props.paused || false;

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  useImperativeHandle(ref, () => ({
    getTime: () => {
      return `${hrs.toString().padStart(2, '0')}:${mins
        .toString()
        .padStart(2, '0')}:
      ${secs.toString().padStart(2, '0')}`;
    },
  }));

  function tick() {
    if (!paused) {
      if (secs === 59) {
        setTime([hrs, mins + 1, 0]);
      } else if (mins === 60) setTime([hrs + 1, 0, 0]);
      else setTime([hrs, mins, secs + 1]);
    }
  }

  return (
    <TimerContainer>
      <TimerText>
        {hrs.toString().padStart(2, '0')}:{mins.toString().padStart(2, '0')}:
        {secs.toString().padStart(2, '0')}
      </TimerText>
    </TimerContainer>
  );
};
export default forwardRef(Timer);
