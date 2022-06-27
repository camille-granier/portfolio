import React, { useState, useEffect } from 'react';

const Contact = () => {

    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = (e) => {

        navigator.clipboard.writeText('granierc@protonmail.com');
        setIsCopied(true);
    }

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false)
              }, 4000);
            
        }
    }, [isCopied])

    return (
        <div className='contact'
             id='contact'>
            <span className='contact-mask'>
            <h2>Contact me</h2>
            </span>
            <div className='links-container'>
            <div className='line'> </div>
                <div className='email'>
                <p>Email</p>
                <div className='link'>
                <span className='mask'>
                <div className='email-link-container'>
                <button 
                className='email link-title-1 email-title'
                
                value='granierc@protonmail.com'
                onClick={copyToClipboard}>granierc@protonmail.com</button>
                <div 
                className='link-title-2 email-title'
                id='email'
                value='granierc@protonmail.com'
                onClick={copyToClipboard}>{isCopied ? 'mail copied!' : 'copy link?'}</div>
                </div>
                </span>
                </div>
            </div>
            <div className='line'> </div>
            <div className='github'>
                <p>Github</p>
                <a href='https://github.com/camille-granier' 
                   rel='noreferrer'
                   target='_blank'
                   className='link'>
                    <span className='mask'>
                        <div className='github-link-container'>
                        <span className="link-title-1 github-title">@camille-granier</span>
                        <span className="link-title-2 github-title">@camille-granier</span>
                        </div>
                    </span>
                   </a>
            </div>
            <div className='line'> </div>
            </div>
        </div>
    );
};

export default Contact;