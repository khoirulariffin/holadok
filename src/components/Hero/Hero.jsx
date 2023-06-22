import React from "react";
import { hero } from "../../assets/";
import classes from "./hero.module.css";
import Button from "../Button/Button";
import Testimonial from "../Testimonial/Testimonial";

const Hero = () => {
  return (
    <section className={classes.container}>
      <div className={classes.leftSection}>
        <div className={classes.leftSection__left}>
          <h1>Get the healthcare you need, when you need it.</h1>
          <p>
            Manage all of your healthcare needs in one convenient place – from
            booking appointments to tracking your health history.
          </p>
          <Button title={"Book an Appointment"} />
        </div>
      </div>
      <div className={classes.imageWrapper}>
        <div className={classes.center}>
          <Testimonial />
        </div>
        <img src={hero} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
