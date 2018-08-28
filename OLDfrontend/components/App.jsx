import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Splash from './splash/splash';
// import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import { red, green, purple } from 'material-ui/colors'

// const theme = createMuiTheme({
//   palette: {
//     primary: purple,
//     secondary: green,
//     error: red,
//   },
// });

const App = () => (
  <div>

    <Switch>
      {/* <MuiThemeProvider theme={theme}> */}
        <Route exact path="/" component={Splash} />
      {/* </MuiThemeProvider> */}
    </Switch>
  </div>
);

export default App;