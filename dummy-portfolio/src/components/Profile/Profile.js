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
        Hi! fjij fj eifi jefj eifje ijf ieifj eijf i eijfiejfehf ef efjiuejhfi
        efapfha fafj osif ahfhf afh a ffg hagaghhefiooei f sahfewj eif j uah
        sduihf uifyhauyhfsuid fhsdaufh sfjsiadjfuf s sfsyfudfhsdui asfy h a rawh
        a r f sfhs
      </div>
    </div>
  );
};

export default profile;
