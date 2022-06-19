import React from 'react';
import Image from 'next/image';

const Logo = () => (
  <div className='logo'>
    <Image 
    src="/img/cat-2.svg" 
    alt='logo'
    width={500}
    height={500} />
  </div>
);

export default Logo;