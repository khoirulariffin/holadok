import React, { useEffect, useState } from "react";
import classes from "./app.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (!isMobile) {
    return <h1>kurang</h1>;
  }

  return (
    <main className={classes.container}>
      <Header />
      <Hero />
    </main>
  );
};

export default App;
