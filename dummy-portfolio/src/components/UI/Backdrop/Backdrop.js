import React from "react";

const backdrop = (props) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "rgb(0,0,0,0.3)",
        position: "fixed",
        zIndex: "50",
      }}
      onClick={props.backdropClicked}
    ></div>
  );
};

export default backdrop;
