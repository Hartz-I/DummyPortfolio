import React from "react";
import classes from "./Toolbar.module.css";

import logo from "../../../assets/images/logo.png";

import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <div className={classes.LogoTitle}>
        <div className={classes.LogoBox}>
          <img className={classes.Logo} alt="logo" src={logo} />
        </div>
        <h1 className={classes.Title} style={{ color: "white" }}>
          Hartz
        </h1>
      </div>
      <div className={classes.DesktopOnly}>
        <NavigationItems />
      </div>
      <div
        className={[classes.ToggleButton, classes.MobileOnly].join(" ")}
        onClick={props.toggleHandler}
      >
        <button>Menu</button>
      </div>
    </div>
  );
};

export default toolbar;
