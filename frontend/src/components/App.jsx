import React from 'react';
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute, AuthRoute } from '../util/route_util';

import Splash from './splash/splash';
import NavbarContainer from './navbar/navbar_container';
import DashboardContainer from './dashboard/dashboard_container';
import MapContainer from './map/map_container.js';
import HistoryContainer from './history/history_container.js';
import LocationContainer from './location/location_container.js';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <Route path="/" component={NavbarContainer} />

    <Switch>
      {/* <MuiThemeProvider theme={theme}> */}
      <Route exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/dashboard" component={DashboardContainer} />
      <Route exact path="/map" component={MapContainer} />
      <Route exact path="/history" component={HistoryContainer} />
      <Route exact path="/location" component={LocationContainer} />
      {/* </MuiThemeProvider> */}
    </Switch>
  </div>
);

export default App;
