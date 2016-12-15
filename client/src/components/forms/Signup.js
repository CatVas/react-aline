import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';

import * as actions from '../../actions';
import {
  defaultUserName,
  email_is_required,
  password_is_required,
  passwords_must_coincide,
} from '../../constants';
import InputText from './InputText';


class Signup extends Component {
  componentDidMount() {
    this.props.clearAuthError();
  }

  handleFormSubmit = ({ email, password, userName }) => {
    const { reset, signup } = this.props;

    signup({
      email,
      password,
      userName: userName || defaultUserName,
    }, () => {
      reset();
    });
  };

  render() {
    const { authError, handleSubmit, invalid, pristine } = this.props;

    const btnClass = `btn btn-primary ${invalid || pristine ? 'disabled' : ''}`;

    return (
      <div className="row">
        <form className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3" onSubmit={handleSubmit(this.handleFormSubmit)}>
          <Field
            component={InputText}
            name="userName"
            placeholder="Username"
            type="text"
          />

          <Field
            component={InputText}
            name="email"
            placeholder="Email"
            type="email"
          />

          <Field
            component={InputText}
            name="password"
            placeholder="Password"
            type="password"
          />

          <Field
            component={InputText}
            name="confirmPassword"
            placeholder="Confirm password"
            type="password"
          />

          <p className="bg-danger text-danger">{authError}</p>

          <button className={btnClass} type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    authError: state.auth.error,
  };
}

Signup = connect(mapStateToProps, actions)(Signup);

function validate({ confirmPassword, email, password }) {
  const errors = {};

  if (!email) {
    errors.email = email_is_required;
  }
  if (!password) {
    errors.password = password_is_required;
  }
  if (password !== confirmPassword) {
    errors.password = errors.confirmPassword = passwords_must_coincide;
  }

  return errors;
}

export default reduxForm({
  form: 'signup',
  validate,
})(Signup);
