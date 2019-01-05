import * as React from "react";
import { Input, Button } from "@material-ui/core";
import auth from "../../common/helpers/auth";
import { withStyles, createStyles, WithStyles, Theme } from "@material-ui/core/styles";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import StyledAuthContainer from "./StyledAuthContainer";
import { UserContext } from "../../common/helpers/context";

interface IState {
  email: string;
  password: string;
  error: string;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing.unit
    }
  });

type PropsType = RouteComponentProps & WithStyles<typeof styles>;
class SignIn extends React.Component<PropsType, IState> {
  state = { email: "", password: "", error: "" };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.id]: event.target.value } as any);
  };

  signIn = async (event: any) => {
    event.preventDefault();
    const { email, password } = this.state;
    const response = await this.context.logIn(email, password);
    if (response && response.error) {
      this.setState({ error: response.error });
    }
    if (this.context.user) this.props.history.push("/");
  };

  render() {
    return (
      <StyledAuthContainer>
        <form onSubmit={this.signIn} className={this.props.classes.root}>
          <Input
            type="email"
            id="email"
            placeholder={"email"}
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <Input
            type="password"
            id="password"
            placeholder={"password"}
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <Link to="/signUp">Don't have an account yet?</Link>
          {this.state.error && <p>{this.state.error}</p>}
          <Button type="submit">Sign In</Button>
        </form>
      </StyledAuthContainer>
    );
  }
}

SignIn.contextType = UserContext;

export default withRouter(withStyles(styles)(SignIn));
