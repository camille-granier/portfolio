import React from "react";
import About from "./About";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
      <span className="title-mask">
      <div className="title-container">
        <h1 className="title">Camille Granier</h1>
        <div className="sm-title">Front-end developer</div>
      </div>
      </span>
      <About />
      </div>
    </div>
  );
};

export default Hero;
