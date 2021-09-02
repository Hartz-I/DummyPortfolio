import React, { Component } from "react";

import Aux from "../../hoc/Auxilliary/Auxilliary";
import classes from "./Layout.module.css";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";

class Layout extends Component {
  state = {
    clicked: false,
  };

  toggleMenuHandler = () => {
    let clicked = this.state.clicked;
    this.setState({ clicked: !clicked });
  };

  render() {
    return (
      <Aux>
        <div>
          <Toolbar toggleHandler={this.toggleMenuHandler} />
          <Sidedrawer clicked={this.state.clicked} />
        </div>
        <p>sidedrawer</p>
        <div className={classes.Children}>{this.props.children}</div>
      </Aux>
    );
  }
}

export default Layout;
