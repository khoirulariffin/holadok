import React from "react";

import classes from "./error.module.css";
import { not_found } from "../../assets";

const Error = () => {
  return (
    <main className={classes.container}>
      <img src={not_found} alt="Not Found" />
      <h1>At least 1280px screen size</h1>
    </main>
  );
};

export default Error;
