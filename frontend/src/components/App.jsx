import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Splash from './splash/splash';
import Navbar from './navbar/navbar';

const App = () => (
  <div>
    <Navbar />

    <Switch>
      {/* <MuiThemeProvider theme={theme}> */}
        <Route exact path="/" component={Splash} />
      {/* </MuiThemeProvider> */}
    </Switch>
  </div>
);

export default App;
