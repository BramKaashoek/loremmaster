import * as React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { Input, Button } from "@material-ui/core";
import StyledAuthContainer from "./StyledAuthContainer";
import { fetchAsJson } from "../../common/helpers/fetch";

interface IProps {}
interface IState {
  email: string;
  password: string;
  passwordRepeat: string;
}

const styles = () =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column"
    }
  });
type PropsType = IProps & WithStyles<typeof styles>;
class SignUp extends React.Component<PropsType, IState> {
  state = {
    email: "",
    password: "",
    passwordRepeat: ""
  };

  signUp = async (event: any) => {
    event.preventDefault();
    const { email, password } = this.state;
    const isSuccess = await fetchAsJson("/users", { method: "POST", body: { email, password } });
    console.log(isSuccess);
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
          <Button type="submit">Sign Up</Button>
        </form>
      </StyledAuthContainer>
    );
  }
}

export default withStyles(styles)(SignUp);
