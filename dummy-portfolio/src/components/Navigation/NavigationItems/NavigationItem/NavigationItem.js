import React from "react";
import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  return (
    <a href={props.link} className={classes.NavigationItem}>
      {props.children}
    </a>
  );
};

export default navigationItem;
