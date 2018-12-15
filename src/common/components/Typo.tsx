import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, MuiThemeProvider, withStyles } from "@material-ui/core/styles";

interface IProps {}
interface IState {}

class Typo extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <h1>Penis</h1>
        <h2>Penis</h2>
        <h3>Penis</h3>
        <body>Penis ipsum</body>
      </div>
    );
  }
}

export default Typo;
