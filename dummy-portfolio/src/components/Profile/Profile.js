import React from "react";
import classes from "./Profile.module.css";

const profile = (props) => {
  return (
    <div>
      <img className={classes.ProfilePic} src={props.img}></img>
    </div>
  );
};

export default profile;
