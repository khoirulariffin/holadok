import React, { useEffect, useState } from "react";
import classes from "./app.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/footer";

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
    return <Error />;
  }

  return (
    <main className={classes.container}>
      <Header />
      <Hero />
      <Footer />
    </main>
  );
};

export default App;
