import React from 'react';

const Contact = () => {

    const copyToClipboard = (e) => {

        navigator.clipboard.writeText('granierc@protonmail.com');
    }

    return (
        <div className='contact'
             id='contact'>
            <h2>Contact me</h2>
            <div className='email'>
                <p>Email</p>
                <button 
                className='email'
                id='email'
                value='granierc@protonmail.com'
                onClick={copyToClipboard}>granierc@protonmail.com</button>
            </div>
            <div className='Github'>
                <p>Github</p>
                <a href='https://github.com/camille-granier' 
                   rel='noreferrer'
                   target='_blank'
                   >@camille-granier</a>
            </div>

        </div>
    );
};

export default Contact;