import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions';
import { email_is_required, password_is_required } from '../../constants';
import InputText from './InputText';


class Signin extends Component {
  componentDidMount() {
    this.props.clearAuthError();
  }

  handleFormSubmit = ({ email, password }) => {
    const { reset, signin } = this.props;

    signin({ email, password }, () => {
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

          <p className="bg-danger text-danger">{authError}</p>

          <button className={btnClass} type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authError: state.auth.error,
  };
}

Signin = connect(mapStateToProps, actions)(Signin);

function validate({ email, password }) {
  const errors = {};

  if (!email) {
    errors.email = email_is_required;
  }
  if (!password) {
    errors.password = password_is_required;
  }

  return errors;
}

export default reduxForm({
  form: 'signin',
  validate,
})(Signin);
