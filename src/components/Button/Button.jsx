import React from "react";

import classes from "./button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type ? props.type : "button"}
    >
      {props.title}
    </button>
  );
};

export default Button;
