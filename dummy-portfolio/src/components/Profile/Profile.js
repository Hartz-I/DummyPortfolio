import React from "react";
import classes from "./Profile.module.css";

const profile = (props) => {
  return (
    <div className={classes.Profile}>
      <img
        className={classes.Profile__Pic}
        src={props.img}
        alt="profile__pic"
      ></img>
      <div className={classes.Profile__Description}>
        Hi! I'm Ahnaf Sadik Inan! A professional React Developer for your
        frinedly nabourhood!
      </div>
    </div>
  );
};

export default profile;
