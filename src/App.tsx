import React, { Component } from "react";
import { Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { createBrowserHistory } from "history";
import Frame from "./common/components/Frame";
import { theme } from "./common/theme";

const browserHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <MuiThemeProvider theme={theme}>
          <Frame />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
