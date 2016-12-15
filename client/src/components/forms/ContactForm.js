import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import React from 'react';

import * as actions from '../../actions';
import {
  email_is_required, message_is_required, what_is_your_name
} from '../../constants';
import InputText from './InputText';


let Contact = props => {
  const {
    authenticated, handleSubmit, invalid, reset, sendMessage, userEmail, userName,
  } = props;

  const btnClass = `btn btn-primary${invalid ? ' disabled' : ''}`;
  const handleFormSubmit = ({ email, message, userName }) => {
    sendMessage({ email, message, userName }, () => reset());
  };

  return (
    <div className="row">
      <form className="f-contact col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3" onSubmit={handleSubmit(handleFormSubmit)}>
        <Field
          component={InputText}
          defaultValue={authenticated ? userName : ''}
          name="userName"
          placeholder="Username"
          type="text"
        />

        <Field
          component={InputText}
          defaultValue={authenticated ? userEmail : ''}
          name="email"
          placeholder="Email"
          type="email"
        />

        <Field
          component={InputText}
          name="message"
          placeholder="Message"
          type="textarea"
        />

        <button className={btnClass} type="submit">Send</button>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  const { authenticated, email, userName } = state.auth;

  return { authenticated, userEmail: email, userName };
}

Contact = connect(mapStateToProps, actions)(Contact);

export default reduxForm({
  form: 'contact',
  validate({ email, message, userName }) {
    const errors = {};

    if (!email) {
      errors.email = email_is_required;
    }
    if (!message) {
      errors.message = message_is_required;
    }
    if (!userName) {
      errors.userName = what_is_your_name;
    }

    return errors;
  }
})(Contact);
