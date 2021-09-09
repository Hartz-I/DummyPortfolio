import React from "react";
import SocialMedia from "./SocialMedia/SocialMedia";

import classes from "./SocialMedias.module.css";

import twitter from "../../assets/images/twitter.jpg";
import facebook from "../../assets/images/facebook.jpg";
import linkedin from "../../assets/images/linkedin.jpg";

const socialMedias = (props) => {
  return (
    <div className={classes.SocialMedias}>
      <div className={classes.SocialMedias__1}>
        <SocialMedia img={facebook} />
      </div>
      <div className={classes.SocialMedias__2}>
        <SocialMedia img={linkedin} />
      </div>
      <div className={classes.SocialMedias__3}>
        <SocialMedia img={twitter} />
      </div>
    </div>
  );
};

export default socialMedias;
