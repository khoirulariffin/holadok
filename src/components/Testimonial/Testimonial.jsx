import React from "react";

import classes from "./testimonial.module.css";
import { testimonial } from "../../assets";

const Testimonial = () => {
  return (
    <div className={classes.testimonial}>
      <img src={testimonial} alt="Testimonial" />
    </div>
  );
};

export default Testimonial;
