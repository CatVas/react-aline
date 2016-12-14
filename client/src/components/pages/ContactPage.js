import { connect } from 'react-redux';
import React, { Component } from 'react';

import * as actions from '../../actions';
import ContactForm from '../forms/ContactForm';


class ContactPage extends Component {
  componentWillUpdate(next) {
    const { contactMsgReset, resetAfterMs } = next;

    if (resetAfterMs) {
      setTimeout(() => {
        contactMsgReset();
      }, resetAfterMs);
    }
  }

  subhd = () => {
    const { resetAfterMs, text } = this.props;

    return (resetAfterMs && text)
    ? <p className="contactpage-subhd text-success">{text}</p>
    : <p className="contactpage-subhd">Contact us on any of them!</p>;
  };

  render() {
    return (
      <section className="contactpage page">
        <h1>Have questions?</h1>
        {this.subhd()}
        <ContactForm />
      </section>
    );
  }
};

function mapStateToProps(state) {
  return {
    resetAfterMs: state.contactMsg.resetAfterMs,
    text: state.contactMsg.text,
  };
}

export default connect(mapStateToProps, actions)(ContactPage);
