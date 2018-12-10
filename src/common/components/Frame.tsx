import * as React from "react";
import { Router, Switch, Route } from "react-router-dom";
import SignIn from "../../modules/auth/SignIn";
import SignUp from "../../modules/auth/SignUp";
import Appbar from "./Appbar";

interface IProps {}
interface IState {}

class Frame extends React.Component<IProps, IState> {
  render() {
    return (
      <>
        <Appbar />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
        </Switch>
      </>
    );
  }
}

export default Frame;
