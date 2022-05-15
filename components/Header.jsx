import React from 'react';
import HeaderStyles from '../styles/_Header.module.scss';

const Header = () => {
    return (
        <div className={HeaderStyles.header}>
            <nav>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
            </nav>    
        </div>
    );
};

export default Header;