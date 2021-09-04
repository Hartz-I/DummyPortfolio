import React, { Component } from "react";

import Aux from "../../hoc/Auxilliary/Auxilliary";
import classes from "./Layout.module.css";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";
import Backdrop from "../UI/Backdrop/Backdrop";

class Layout extends Component {
  state = {
    clicked: false,
  };

  toggleMenuHandler = () => {
    let clicked = this.state.clicked;
    this.setState({ clicked: !clicked });
  };

  backdropClickedHandler = () => {
    this.setState({ clicked: false });
  };

  render() {
    return (
      <Aux>
        {this.state.clicked ? (
          <Backdrop backdropClicked={this.backdropClickedHandler} />
        ) : null}
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
