import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import jwt_decode from 'jwt-decode';
import * as APIUtil from './util/session_api_util';
//Components
import { setCurrentUser, logoutUser } from './actions/session_actions';
import configureStore from './store/store';
// import App from './components/App';
import Root from "./components/root";
import { registerServiceWorker } from './registerServiceWorker';

import { fetchLocations } from './actions/location_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  // Check for token
  
  if (localStorage.jwtToken) {
    // Set auth token header auth
    APIUtil.setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = '/login';
    }
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  // registerServiceWorker();
});