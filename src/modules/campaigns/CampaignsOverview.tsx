import * as React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

interface IProps {}
interface IState {}

const styles = () => createStyles({ root: {} });
type PropsType = IProps & WithStyles<typeof styles>;
class CampaignsOverview extends React.Component<PropsType, IState> {
  render() {
    return (
      <div className={this.props.classes.root}>
        hello world
        <Link to="/campaigns/new">create new campaign</Link>
      </div>
    );
  }
}

export default withStyles(styles)(CampaignsOverview);
