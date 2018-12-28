import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "../../modules/auth/SignIn";
import SignUp from "../../modules/auth/SignUp";
import Appbar from "./Appbar";
import auth from "../helpers/auth";
import { UserContext } from "../helpers/context";
import Content from "./Content";

interface IProps {}
interface IState {
  user: any;
  logIn: (username: string, password: string) => void;
  logOut: () => void;
}

class Frame extends React.Component<IProps, IState> {
  state = {
    user: undefined,
    logIn: async (username: string, password: string) => {
      const user = await auth.signIn(username, password);
      this.setState({ user });
    },
    logOut: () => {
      auth.signOut();
      this.setState({ user: undefined });
    }
  };

  async componentDidMount() {
    const user = await auth.checkSession();
    if (user) this.setState({ user });
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        <Appbar />
        <Switch>
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="*" render={() => (this.state.user ? <Content /> : <Redirect to="/signIn" />)} />
        </Switch>
      </UserContext.Provider>
    );
  }
}

export default Frame;
