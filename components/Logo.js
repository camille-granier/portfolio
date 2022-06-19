import React from 'react';
import Image from 'next/image';

const Logo = () => (
  <div className='logo'>
    <a href="#">
    <Image 
    src="/img/cat-2.svg" 
    alt='logo'
    width={500}
    height={500} />
    </a>
  </div>
);

export default Logo;