import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import authReducer from './authReducer';
import contactMsgReducer from './contactMsgReducer';
import usersReducer from './usersReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  contactMsg: contactMsgReducer,
  form: formReducer,
  users: usersReducer,
});

export default rootReducer;
