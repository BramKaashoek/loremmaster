import * as React from "react";
import { withStyles, WithStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { UserContext } from "../helpers/context";
import { Menu, MenuItem } from "@material-ui/core";

interface IProps {}
interface IState {
  anchorEl: any;
}

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
  state = {
    anchorEl: null
  };

  handleOpen = (event: any) => {
    this.setState({ anchorEl: event.target });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogOut = () => {
    this.context.logOut();
    this.handleClose();
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Link to={"/"}>
          <h1>Loremaster</h1>
        </Link>
        {this.context.user && (
          <div>
            <span onClick={this.handleOpen}>{this.context.user.email}</span>
            <Menu open={Boolean(this.state.anchorEl)} onClose={this.handleClose} anchorEl={this.state.anchorEl}>
              <MenuItem>
                <Link to="/campaigns">Campaigns</Link>
              </MenuItem>
              <MenuItem onClick={this.handleLogOut}>Log Out</MenuItem>
            </Menu>
          </div>
        )}
      </div>
    );
  }
}
Appbar.contextType = UserContext;

export default withStyles(styles)(Appbar);
