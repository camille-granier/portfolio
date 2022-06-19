import React from 'react';
import Logo from './Logo.js';

const Header = () => {
    return (
        <div className='header'>
            <Logo/>
            <nav className='nav'>
                <a href="#">Home</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
            </nav>    
        </div>
    );
};

export default Header;