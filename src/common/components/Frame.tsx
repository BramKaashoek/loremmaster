import * as React from "react";
import { Router, Switch, Route } from "react-router-dom";
import SignIn from "../../modules/auth/SignIn";
import SignUp from "../../modules/auth/SignUp";
import Appbar from "./Appbar";
import Characters from "../../modules/characters/Characters";
import Typo from "./Typo";

interface IProps {}
interface IState {}

class Frame extends React.Component<IProps, IState> {
  render() {
    return (
      <>
        <Appbar />
        <Switch>
          <Route exact path="/" component={Characters} />
          {/* <Route path="characters/:id" component={CharacterDetail} /> */}
          <Route path="/typo" component={Typo} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
        </Switch>
      </>
    );
  }
}

export default Frame;
