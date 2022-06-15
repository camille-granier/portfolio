import React from "react";
import About from "./About";

const Hero = () => {
  return (
    <div className="hero">
      <div className="title-container">
        <h1 className="title">Camille Granier</h1>
        <br />
        <div className="sm-title">Front-end developer</div>
      </div>
      <br />
      <About />
    </div>
  );
};

export default Hero;
