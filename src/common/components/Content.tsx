import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Characters from "../../modules/characters/Characters";
import CharacterDetail from "../../modules/characters/CharacterDetail";

interface IProps {}
interface IState {}

class Content extends React.Component<IProps, IState> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Characters} />
        <Route path="/characters/:id" component={CharacterDetail} />
      </Switch>
    );
  }
}

export default Content;
