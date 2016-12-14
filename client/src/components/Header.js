import { connect } from 'react-redux';
import { Link } from 'react-router';
import React from 'react';

import * as actions from '../actions';
import { defaultUserName } from '../constants';


const Header = props => {
  const { authenticated, signout, userName } = props;

  const onSignOut = ev => {
    ev.preventDefault();
    signout();
  };

  const doorContent = authenticated
    ? <li>Hello, {userName || defaultUserName }! <a href="#" onClick={onSignOut}>Sign out</a></li>
    : (
      <li>
        <Link to="signin">Sign in</Link> / <Link to="signup">Sign up</Link>
      </li>
    );

  return (
    <header className="header">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <Link className="header-brand navbar-brand" to="/">SBP</Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              {authenticated ? <li>
                <Link to="/users">Users</Link>
              </li> : ''}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <ul className="door nav navbar-nav navbar-right">
              {doorContent}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

function mapStateToProps(state) {
  const { authenticated, userName } = state.auth;

  return { authenticated, userName };
}

export default connect(mapStateToProps, actions)(Header);
