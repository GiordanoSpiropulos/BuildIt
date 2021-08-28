import React, { forwardRef } from 'react';
import { View } from 'react-native';
import BaseModal from '../BaseModal';
import { AlertTitle, AlertText } from './styles';

function getAlertModalTitle(type) {
  switch (type) {
    case 'success':
      return 'Sucesso!';
    case 'error':
      return 'Ooops';
    case 'info':
      return 'Info';
    case 'confirm':
      return 'Confirmação';
  }
}

const AlertModal = (props, ref) => {
  console.log(props.buttons);
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
        <AlertText>{props.text && props.text}</AlertText>
      </View>
    </BaseModal>
  );
};

export default forwardRef(AlertModal);
