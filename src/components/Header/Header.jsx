import React from "react";
import classes from "./header.module.css";
import { logo } from "../../assets";

const Header = () => {
  return (
    <>
      <div className={classes.space}></div>
      <header className={classes.header}>
        <div className={classes.left}>
          <img src={logo} alt="logo" />
          <ul className={classes.menuLeft}>
            <li>
              <span>Home</span>
            </li>
            <li>Features</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className={classes.right}>
          <ul className={classes.menuRight}>
            <li>Login</li>
            <li>
              <span>Book Now</span>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
