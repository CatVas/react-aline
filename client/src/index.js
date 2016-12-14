import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import ContactPage from './components/pages/ContactPage';
import EnterPage from './components/pages/EnterPage';
import HomePage from './components/pages/HomePage';
import reducers from './reducers';
import RequireAuth from './components/hoc/RequireAuth';
import UsersPage from './components/pages/UsersPage';
import { USER_AUTH } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const sessionId = sessionStorage.getItem('sessionId');
const userName = sessionStorage.getItem(`userName-${sessionId}`);

if (sessionId) {
  store.dispatch({
    payload: { userName },
    type: USER_AUTH,
  });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="contact" component={ContactPage} />
        <Route path="signin" component={EnterPage} />
        <Route path="signup" component={EnterPage} />
        <Route path="users" component={RequireAuth(UsersPage)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
