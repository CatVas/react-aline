import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';


export default function(Cmp) {
  class Auth extends Component {
    static contextTypes = {
      router: PropTypes.object,
    };

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/signin');
      }
    }

    render() {
      return <Cmp {...this.props}/>;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Auth);
}
