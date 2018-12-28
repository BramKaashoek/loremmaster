import { createStyles, WithStyles, withStyles, CssBaseline } from "@material-ui/core";
import { type } from "os";
import * as React from "react";
import { theme } from "./theme";

const styles = createStyles<ClassKeys>({
  "@global": {
    html: { backgroundColor: theme.palette.primary.main },

    body: {
      textDecoration: "none",
      fontFamily: "Courier",

      color: theme.palette.primary.contrastText,
      background: theme.palette.primary.main
    },
    link: {
      color: "#fffffff",
      textDecoration: "none"
    },
    //h1: { fontSize: 50, color: theme.palette.primary.light },
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
