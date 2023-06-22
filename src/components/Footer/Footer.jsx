import React from "react";

import classes from "./footer.module.css";
import {
  online_appointment,
  medical_reminder,
  virtual_consultations,
} from "../../assets";

const Footer = () => {
  const contents = [
    {
      image: online_appointment,
      title: "Online Appointment Scheduling",
      desc: "Allows users to schedule appointments with their healthcare provider through the app.",
    },
    {
      image: medical_reminder,
      title: "Medication Reminders",
      desc: "Allows users to schedule appointments with their healthcare provider through the app.",
    },
    {
      image: virtual_consultations,
      title: "Virtual Consultations",
      desc: "Allows users to schedule appointments with their healthcare provider through the app.",
    },
  ];

  const data = contents.map((content, i) => {
    return (
      <div key={i} className={classes.inner}>
        <div className={classes.inner__left}>
          <img src={content.image} alt="Image" />
        </div>
        <div className={classes.inner__right}>
          <h1>{content.title}</h1>
          <p>{content.desc}</p>
        </div>
      </div>
    );
  });
  return <section className={classes.footer}>{data}</section>;
};

export default Footer;
