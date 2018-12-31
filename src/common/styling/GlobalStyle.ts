import { createStyles, WithStyles, withStyles, CssBaseline } from "@material-ui/core";
import { type } from "os";
import * as React from "react";
import { theme } from "./theme";

const styles = createStyles<ClassKeys>({
  "@global": {
    html: { backgroundColor: "#e5e5e5" },

    body: {
      textDecoration: "none",
      fontFamily: "Courier",
      backgroundColor: "#e5e5e5"
    },
    link: {
      color: "#fffffff",
      textDecoration: "none"
    },
    iframe: {
      border: 0
    }
  }
});
type ClassKeys = "@global";
type PropsType = WithStyles<ClassKeys> & { children: any };

const GlobalStyleProvider: React.StatelessComponent<PropsType> = props =>
  React.createElement(CssBaseline, null, props.children);

export default withStyles(styles)(GlobalStyleProvider);
