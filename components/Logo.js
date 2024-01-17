import React from 'react';
import Image from 'next/image';

const Logo = () => (
  <div className='logo'>
    <a href="#">
    <Image 
    src="/img/logo c.svg" 
    alt='logo'
    width="480"
    height="480" />
    </a>
  </div>
);

export default Logo;