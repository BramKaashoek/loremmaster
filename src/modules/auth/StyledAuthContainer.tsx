import * as React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";

interface IProps {}
interface IState {}

const styles = () =>
  createStyles({
    root: {
      margin: "auto",
      width: 440,
      border: "1px solid"
    }
  });
type PropsType = IProps & WithStyles<typeof styles>;
class StyledAuthContainer extends React.Component<PropsType, IState> {
  render() {
    return <div className={this.props.classes.root}>{this.props.children}</div>;
  }
}

export default withStyles(styles)(StyledAuthContainer);
