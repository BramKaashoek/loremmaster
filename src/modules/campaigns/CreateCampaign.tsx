import * as React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { Input, Button } from "@material-ui/core";
import { fetchAsJson } from "../../common/helpers/fetch";

interface IProps {}
interface IState {
  name: string;
  error: string;
}

const styles = () => createStyles({ root: {} });
type PropsType = IProps & WithStyles<typeof styles>;
class CreateCampaign extends React.Component<PropsType, IState> {
  state = {
    name: "",
    error: ""
  };

  createCampaign = async (event: any) => {
    event.preventDefault();
    this.setState({ error: "" });
    const { name } = this.state;
    const response = await fetchAsJson("/campaigns", { method: "POST", body: { name } });
    if (response.error) this.setState({ error: response.error });
    if (!response.error) {
      this.setState({ name: "" });
    }
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.id]: event.target.value } as any);
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <form onSubmit={this.createCampaign} className={this.props.classes.root}>
          <Input id="name" placeholder="campaignName" value={this.state.name} onChange={this.handleInputChange} />
          {this.state.error !== "" && <p>{this.state.error}</p>}
          <Button type="submit">createCampaign</Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(CreateCampaign);
