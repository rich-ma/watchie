import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Splash from './splash/splash';
import DashboardContainer from './dashboard/dashboard_container';

const App = () => (
  <div>

    <Switch>
      {/* <MuiThemeProvider theme={theme}> */}
        <Route exact path="/" component={Splash} />
        <Route exact path="/dashboard" component={DashboardContainer} />
      {/* </MuiThemeProvider> */}
    </Switch>
  </div>
);

export default App;
