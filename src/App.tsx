import React, { Component } from "react";
import { Router } from "react-router-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { createBrowserHistory } from "history";
import Frame from "./common/components/Frame";
import { theme } from "./common/styling/theme";
import globalStyle from "./common/styling/GlobalStyle";
import GlobalStyle from "./common/styling/GlobalStyle";

const browserHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <GlobalStyle>
          <MuiThemeProvider theme={theme}>
            <Frame />
          </MuiThemeProvider>
        </GlobalStyle>
      </Router>
    );
  }
}

export default App;
