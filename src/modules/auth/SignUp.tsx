import * as React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { Input, Button } from "@material-ui/core";
import StyledAuthContainer from "./StyledAuthContainer";
import { fetchAsJson } from "../../common/helpers/fetch";
import auth from "../../common/helpers/auth";
import { withRouter, RouteComponentProps } from "react-router";
import { UserContext } from "../../common/helpers/context";

interface IProps {}
interface IState {
  email: string;
  password: string;
  passwordRepeat: string;
  error: undefined | string;
}

const styles = () =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column"
    }
  });
type PropsType = IProps & RouteComponentProps & WithStyles<typeof styles>;
class SignUp extends React.Component<PropsType, IState> {
  state = {
    email: "",
    password: "",
    passwordRepeat: "",
    error: ""
  };

  signUp = async (event: any) => {
    event.preventDefault();
    this.setState({ error: "" });
    const { email, password } = this.state;
    const response = await fetchAsJson("/users", { method: "POST", body: { email, password } });
    if (response.error) {
      this.setState({ error: response.error });
    }
    if (response.email) {
      await this.context.logIn(email, password);
      this.props.history.push("/");
    }
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.id]: event.target.value } as any);
  };

  render() {
    return (
      <StyledAuthContainer>
        <form onSubmit={this.signUp} className={this.props.classes.root}>
          <Input
            type="email"
            id="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <Input
            type="password"
            id="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <Input
            type="password"
            id="passwordRepeat"
            placeholder="repeat password"
            value={this.state.passwordRepeat}
            onChange={this.handleInputChange}
          />
          {this.state.error !== "" && <p>{this.state.error}</p>}
          <Button type="submit">Sign Up</Button>
        </form>
      </StyledAuthContainer>
    );
  }
}
SignUp.contextType = UserContext;

export default withRouter(withStyles(styles)(SignUp));
