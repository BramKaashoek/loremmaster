import * as React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
        {characters.map(character => (
          <Link to={`characters/${character.id}`}>
            <h1>{character.name}</h1>
          </Link>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Characters);

enum eType {
  celestial,
  humanoid,
  undead
}

enum eSize {
  small,
  medium,
  large,
  huge,
  gargantuan
}

enum eRace {
  human,
  dwarf,
  highElf,
  waterElf,
  woodElf,
  firbolg
}

type ICharacter = Partial<{
  id: string;
  name: string;
  race: eRace;
  size: eSize;
  type: eType;
}>;

const characters: ICharacter[] = [{ name: "Deathclaw", id: "1" }, { name: "Alavara", id: "2" }];
