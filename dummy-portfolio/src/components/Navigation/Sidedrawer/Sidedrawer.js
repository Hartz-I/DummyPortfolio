import React from "react";
import classes from "./Sidedrawer.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
const sidedrawer = (props) => {
  let itemVisibility = null;

  if (!props.clicked) {
    itemVisibility = classes.Close;
  } else {
    itemVisibility = null;
  }
  return (
    <div
      className={classes.Sidedrawer}
      style={props.clicked ? { width: "200px", opacity: "1" } : null}
    >
      <div className={itemVisibility}>
        <NavigationItems />
      </div>
    </div>
  );
};

export default sidedrawer;
