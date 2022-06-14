import React from 'react';
import About from './About';

const Hero = () => {
    return (
        <div className='hero'>
    <div className='title-container'>
      <div className='title'>Camille Granier</div>
     <br/>
     <div className='sm-title'>Front-end developer</div>
     </div>
     <br/>
    <About />
    </div>
    );
};

export default Hero;