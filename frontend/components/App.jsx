import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Splash from './splash/splash';

const App = () => (
    <div>
  
      <Switch>
        <Route exact path="/" component={Splash} />
      </Switch>
    </div>
  );
  
  export default App;