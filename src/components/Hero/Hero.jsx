import React from "react";
import { hero } from "../../assets/";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <div className={classes.imageWrapper}>
      <img src={hero} alt="hero" />
    </div>
  );
};

export default Hero;
