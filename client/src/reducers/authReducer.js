import { defaultUserName } from '../constants';
import {
  USER_AUTH, USER_AUTH_ERROR, USER_AUTH_ERROR_CLEAR, USER_UNAUTH
} from '../actions/types';


export const defaultState = {
  authenticated: false,
  email: '',
  error: '',
  userName: defaultUserName,
};

export default function(state = defaultState, action) {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case USER_AUTH:
      return Object.assign({}, state, {
        authenticated: true,
        email: action.payload && action.payload.email || '',
        error: '',
        userName: action.payload && action.payload.userName || defaultUserName,
      });

    case USER_AUTH_ERROR:
      return Object.assign({}, defaultState, {
        error: action.payload,
      });

    case USER_AUTH_ERROR_CLEAR:
      return Object.assign({}, state, {
        error: '',
      });

    case USER_UNAUTH:
      return Object.assign({}, defaultState);
  }

  return state;
}
