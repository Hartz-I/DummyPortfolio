import React, { Component } from "react";
//import Aux from "../../hoc/Auxilliary/Auxilliary";
import ProPic from "../../assets/images/logoImage.jpg";
import classes from "./Home.module.css";

import Profile from "../../components/Profile/Profile";
import SocialMedias from "../../components/SocialMedias/SocialMedias";

class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <Profile img={ProPic} />
        <SocialMedias />
      </div>
    );
  }
}

export default Home;
