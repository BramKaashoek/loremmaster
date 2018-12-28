import * as React from "react";
import { withStyles, WithStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { UserContext } from "../helpers/context";

interface IProps {}
interface IState {}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: 48,
      backgroundColor: theme.palette.primary.main
    }
  });
type PropsType = IProps & WithStyles<typeof styles>;
class Appbar extends React.Component<PropsType, IState> {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Link to={"/"}>
          <h1>Loremaster</h1>
        </Link>
        <UserContext.Consumer>{(context: any) => <span onClick={context.logOut}>log out</span>}</UserContext.Consumer>
      </div>
    );
  }
}

export default withStyles(styles)(Appbar);
