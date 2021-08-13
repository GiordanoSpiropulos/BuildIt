import {
  validateEmail,
  validatePassword,
  validateUsername,
} from './validators';

export function isValidEmailInput(email) {
  if (email) {
    if (validateEmail(email)) return '';
    else return '*Insira um email válido!';
  } else return '*Email não pode ser vazio!';
}

export function isValidPasswordInput(password) {
  if (password) {
    if (validatePassword(password)) return '';
    else
      return '*A senha deve conter no mínimo 8 caracteres, 1 caractere especial, 1 letra maiúscula e 1 letra minúscula!';
  } else return '*A senha não pode ser vazia!';
}

export function isValidUsernameInput(username) {
  if (username) {
    if (validateUsername(username)) return '';
    else return '*O nome de usuário não pode conter caracter especial.';
  } else return '*O nome de usuário não pode estar vazio!';
}
