import React from 'react';
import { Route, Switch } from "react-router-dom";
import Splash from './splash/splash';
import DashboardContainer from './dashboard/dashboard_container';
import MapContainer from './map/map_container.js';
import HistoryContainer from './history/history_container.js';
import LocationContainer from './location/location_container.js';

const App = () => (
  <div>

    <Switch>
      {/* <MuiThemeProvider theme={theme}> */}
      <Route exact path="/" component={Splash} />
      <Route exact path="/dashboard" component={DashboardContainer} />
      <Route exact path="/map" component={MapContainer} />
      <Route exact path="/history" component={HistoryContainer} />
      <Route exact path="/location" component={LocationContainer} />
      {/* </MuiThemeProvider> */}
    </Switch>
  </div>
);

export default App;
