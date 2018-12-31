import * as React from "react";

interface IProps {}
interface IState {}

class Campaigns extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <div>create new campaign</div>
        <div>select campaign</div>
      </div>
    );
  }
}

export default Campaigns;
