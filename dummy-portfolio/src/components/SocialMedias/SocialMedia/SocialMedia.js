import React from "react";
import classes from "./SocialMedia.module.css";

import logo from "../../../assets/images/logo.png";

const socialMedia = (props) => {
  return (
    <a href="/">
      <img className={classes.SocialMedia} src={props.img} alt={props.alt} />
    </a>
  );
};

export default socialMedia;
