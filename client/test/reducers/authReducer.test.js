import { expect } from '../test_helper';

import authReducer, { defaultState } from '../../src/reducers/authReducer';
import { defaultUserName } from '../../src/constants';
import {
  USER_AUTH, USER_AUTH_ERROR, USER_AUTH_ERROR_CLEAR, USER_UNAUTH
} from '../../src/actions/types';


describe('authReducer', () => {
  it('without arguments', () => {
    const state = authReducer();
    expect(state).to.eql(defaultState);
  });

  it('action USER_AUTH', () => {
    const action = { payload: { userName: 'Bob' }, type: USER_AUTH };
    const state = authReducer(defaultState, action);
    expect(state).to.eql({
      authenticated: true,
      error: '',
      userName: action.payload.userName,
    });
  });

  it('action USER_AUTH_ERROR', () => {
    const action = { payload: 'Auth error', type: USER_AUTH_ERROR };
    const state = authReducer(defaultState, action);
    expect(state).to.eql({
      authenticated: false,
      error: action.payload,
      userName: defaultUserName,
    });
  });

  it('action USER_AUTH_ERROR_CLEAR', () => {
    const action = { type: USER_AUTH_ERROR_CLEAR };
    expect(authReducer({
      authenticated: false,
      error: 'error message',
      userName: '',
    }, action).error).to.eql('');
  });

  it('action USER_UNAUTH', () => {
    const action = { type: USER_UNAUTH };
    const prevState = {
      authenticated: true,
      error: '',
      userName: 'Bob',
    };
    const state = authReducer(prevState, action);
    expect(state).to.eql(defaultState);
  });
});
