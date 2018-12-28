import * as React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { ICharacter, eSize, eType } from "./Characters";

interface IProps {}
interface IState {}

const styles = () =>
  createStyles({
    root: {}
  });
type PropsType = IProps & WithStyles<typeof styles>;
class Characters extends React.Component<PropsType, IState> {
  render() {
    return (
      <div className={this.props.classes.root}>
        <h1>{character.name}</h1>
        <p>{character.description}</p>
      </div>
    );
  }
}

export default withStyles(styles)(Characters);

const character: ICharacter = {
  name: "DeathClaw",
  type: eType.dragon,
  size: eSize.gargantuan,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};
