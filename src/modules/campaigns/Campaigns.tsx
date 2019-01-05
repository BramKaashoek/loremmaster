import * as React from "react";
import { Switch, Route } from "react-router";
import CreateCampaign from "./CreateCampaign";
import CampaignsOverview from "./CampaignsOverview";

interface IProps {}
interface IState {}

class Campaigns extends React.Component<IProps, IState> {
  render() {
    return (
      <Switch>
        <Route exact path="/campaigns/" component={CampaignsOverview} />
        <Route path="/campaigns/new" component={CreateCampaign} />
      </Switch>
    );
  }
}

export default Campaigns;
