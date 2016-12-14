import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  apiUrl, contactMsgResetAfterMs, defaultUserName, email_is_in_use, provide_email_password, thanks_well_answer_you_soon, wrong_credentials_user_not_registered,
} from '../constants';
import {
  CONTACT_MSG_RESET, CONTACT_MSG_SET,
  USER_AUTH, USER_AUTH_ERROR, USER_AUTH_ERROR_CLEAR, USER_UNAUTH
} from './types';


export function clearAuthError() {
  return { type: USER_AUTH_ERROR_CLEAR };
}

export function contactMsgReset() {
  return { type: CONTACT_MSG_RESET };
}

export function sendMessage({ email, message, userName }, cb) {
  return function(dispatch) {
    axios.post(`${apiUrl}/sendMessage`, { email, message, userName })
    .then(res => {
      dispatch({
        payload: {
          resetAfterMs: contactMsgResetAfterMs,
          text: thanks_well_answer_you_soon,
        },
        type: CONTACT_MSG_SET,
      });

      cb & cb();
    });
  };
}

export function signin({ email, password }, cb) {
  return function(dispatch) {
    if (!email || !password) {
      dispatch({
        payload: provide_email_password,
        type: USER_AUTH_ERROR,
      });
    }

    axios.post(`${apiUrl}/signin`, { email, password })
    .then(res => {
      const { token, user: { userName } } = res.data;

      sessionStorage.setItem('sessionId', token);
      sessionStorage.setItem(`userName-${token}`, userName);
      dispatch({
        payload: { userName },
        type: USER_AUTH,
      });
      cb && cb();
      browserHistory.push('/');
    })
    .catch(err => {
      dispatch({
        payload: wrong_credentials_user_not_registered,
        type: USER_AUTH_ERROR,
      });
    });
  }
}

export function signout() {
  const sessionId = sessionStorage.getItem('sessionId');

  sessionStorage.removeItem('sessionId');
  sessionStorage.removeItem(`userName-${sessionId}`);

  return { type: USER_UNAUTH };
}

export function signup({ email, password, userName }, cb) {
  const userNameToSave = userName || defaultUserName;

  return function(dispatch) {
    if (!email || !password) {
      dispatch({
        payload: provide_email_password,
        type: USER_AUTH_ERROR,
      });

      cb && cb();
    }

    axios.post(`${apiUrl}/signup`, {
      email,
      password,
      userName: userNameToSave,
    })
    .then(res => {
      const { token, userName } = res.data;

      sessionStorage.setItem('sessionId', token);
      sessionStorage.setItem(`userName-${token}`, userName);

      dispatch({
        payload: { userName: userNameToSave },
        type: USER_AUTH,
      });
      cb && cb();
      browserHistory.push('/');
    })
    .catch(err => {
      dispatch({
        payload: email_is_in_use,
        type: USER_AUTH_ERROR,
      });
    });
  }
}
