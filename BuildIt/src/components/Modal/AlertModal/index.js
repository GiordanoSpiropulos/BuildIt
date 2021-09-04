import React, { forwardRef } from 'react';
import { View } from 'react-native';
import BaseModal from '../BaseModal';
import { AlertTitle, AlertText, AlertTextContainer } from './styles';

function getAlertModalTitle(type) {
  switch (type) {
    case 'success':
      return 'Sucesso!';
    case 'error':
      return 'Ooops';
    case 'info':
      return 'Info';
    case 'warning':
      return 'Alerta';
    case 'confirm':
      return 'Confirmação';
  }
}

const AlertModal = (props, ref) => {
  return (
    <BaseModal {...props} ref={ref} type={props.type}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <AlertTitle>
          {props.title
            ? props.title
            : props.type
            ? getAlertModalTitle(props.type)
            : null}
        </AlertTitle>
        <AlertTextContainer>
          <AlertText>{props.text && props.text}</AlertText>
        </AlertTextContainer>
      </View>
    </BaseModal>
  );
};

export default forwardRef(AlertModal);
