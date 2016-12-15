import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';

import * as actions from '../../actions';
import {
  email_is_required, message_is_required, what_is_your_name
} from '../../constants';
import InputText from './InputText';


function initFormValues({ authenticated, initialize, userEmail, userName }){
  initialize({
    email: authenticated ? userEmail : '',
    userName: authenticated ? userName : '',
  });
}

class Contact extends Component {
  constructor(props) {
    const { authenticated, initialize, userEmail, userName } = props;
    super(props);
    initFormValues({ authenticated, initialize, userEmail, userName });
  }

  componentWillUpdate(nextProps) {
    if (this.props.authenticated !== nextProps.authenticated) {
      const { authenticated, initialize, userEmail, userName } = nextProps;
      initFormValues({ authenticated, initialize, userEmail, userName });
    }
  }

  handleFormSubmit = ({ email, message, userName }) => {
    const { reset, sendMessage } = this.props;
    sendMessage({ email, message, userName }, () => reset());
  };

  render() {
    const { handleSubmit, invalid } = this.props;
    const btnClass = `btn btn-primary${invalid ? ' disabled' : ''}`;

    return (
      <div className="row">
        <form className="f-contact col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3" onSubmit={handleSubmit(this.handleFormSubmit)}>
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
            name="message"
            placeholder="Message"
            type="textarea"
          />

          <button className={btnClass} type="submit">Send</button>
        </form>
      </div>
    );
  }
};

function mapStateToProps(state) {
  const { authenticated, email, userName } = state.auth;
  return { authenticated, userEmail: email, userName };
}

Contact = connect(mapStateToProps, actions)(Contact);

export default reduxForm({
  form: 'contact',
  validate(values) {
    const errors = {};
    const { email, message, userName } = values;

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
