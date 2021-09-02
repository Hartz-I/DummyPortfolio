import React from "react";
import classes from "./NavigationItems.module.css";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  const navItems = [
    ["Home", "/"],
    ["Works", "/works"],
  ];

  const items = navItems.map((item) => {
    return (
      <NavigationItem key={item[0]} link={item[1]}>
        {item[0]}
      </NavigationItem>
    );
  });

  return <div className={classes.NavigationItems}>{items}</div>;
};

export default navigationItems;
