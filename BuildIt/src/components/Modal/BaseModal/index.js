import React, { useImperativeHandle, useState, forwardRef } from 'react';
import { StatusBar } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../../styles';
import { Button } from '../../Buttons/Button';
import {
  ButtonContainer,
  CircleContainer,
  InnerContainer,
  ModalContainer,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BaseModal = (props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  function getModalType(type) {
    switch (type) {
      case 'success':
        return colors.success;
      case 'error':
        return colors.error;
      case 'info':
        return colors.info;
      case 'confirm':
        return colors.info;
      case 'warning':
        return colors.warning;
      default:
        return colors.primary;
    }
  }

  function open() {
    setIsVisible(true);
  }

  function close() {
    setIsVisible(false);
  }

  useImperativeHandle(ref, () => ({
    openModal: () => {
      open();
    },
    closeModal: () => {
      close();
    },
  }));

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={close}
      useNativeDriver
      {...props}
      style={{
        margin: 0,
        flex: 1,
      }}
    >
      <ModalContainer>
        <StatusBar translucent={true} backgroundColor="#rgba(0, 0, 0, 0.7)" />
        {props.type && (
          <CircleContainer backgroundColor={getModalType(props.type)}>
            <Icon
              size={25}
              color={colors.white}
              name={
                props.type === 'success'
                  ? 'check'
                  : props.type === 'error'
                  ? 'times'
                  : props.type === 'info'
                  ? 'thumbs-up'
                  : props.type === 'confirm'
                  ? 'question'
                  : 'exclamation'
              }
            />
          </CircleContainer>
        )}

        <InnerContainer>
          {props.children}
          <ButtonContainer>
            {props.buttons &&
              props.type &&
              props.buttons.map((item) => {
                return (
                  <Button
                    title={item.title}
                    buttonColor={
                      item.color ? item.color : getModalType(props.type)
                    }
                    onPress={item.onPress}
                  />
                );
              })}
            <Button
              title={'Fechar'}
              buttonColor={props.type && getModalType(props.type)}
              onPress={() => ref.current.closeModal()}
            />
          </ButtonContainer>
        </InnerContainer>
      </ModalContainer>
    </Modal>
  );
};

export default forwardRef(BaseModal);
