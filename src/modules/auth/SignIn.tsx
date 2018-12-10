import * as React from "react";
import { Input, Button } from "@material-ui/core";
import { signIn } from "../../common/helpers/auth";
import { withStyles, createStyles, WithStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import StyledAuthContainer from "./StyledAuthContainer";

interface IState {
  email: string;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing.unit
    }
  });

type PropsType = WithStyles<typeof styles>;
class SignIn extends React.Component<PropsType, IState> {
  state = { email: "", password: "" };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.id]: event.target.value } as any);
  };

  signIn = () => {
    signIn(this.state.email, this.state.password);
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
          <Button type="submit">Sign In</Button>
        </form>
      </StyledAuthContainer>
    );
  }
}

export default withStyles(styles)(SignIn);