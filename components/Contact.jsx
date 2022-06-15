import React, { useState } from 'react';

const Contact = () => {

    const [text, setText] = useState('');

    const copyToClipboard = async (e) => {
        setText(e.target.value)

        await navigator.clipboard.writeText(text);
    }

    return (
        <div className='contact'>
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