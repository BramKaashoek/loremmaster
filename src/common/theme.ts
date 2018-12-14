import { createMuiTheme, Typography } from "@material-ui/core";
import { green } from "./colors";

export const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      main: "#ffe57f"
    }
  },
  spacing: {
    unit: 8
  },
  typography: {
    fontFamily: ["sans-serif"].join(","),
    fontSize: 20,
    h1: { fontFamily: ["sans-serif"].join(","), fontSize: 20, color: "contrast" }
  }
});
