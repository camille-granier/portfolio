import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {

    const [isCopied, setIsCopied] = useState(false);
    const [textVisible, setTextVisible] = useState(false)
    const titleRef = useRef();

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

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
        const entry = entries[0];
        setTextVisible(entry.isIntersecting); 
        console.log(entry.isIntersecting) 
        console.log(textVisible)
      });
      observer.observe(titleRef.current);

      return () => {
          //eslint-disable-next-line
        observer.unobserve(titleRef.current)
      };
      //eslint-disable-next-line
    },[])

    return (
        <div className='contact'
             id='contact'>
            <span className='contact-mask'>
            <h2
            ref={titleRef}
            className={ textVisible ? 'title-animation' : ''}>Contact me</h2>
            </span>
            <div className='links-container'>
            <div className='line'> </div>
            <div className='github'>
                <p>Email</p>
                <a href="mailto:granierc@protonmail.com" 
                   className='link'>
                    <span className='mask'>
                        <div className='github-link-container'>
                        <span className="link-title-1 github-title">granierc@protonmail.com</span>
                        <span className="link-title-2 github-title">granierc@protonmail.com</span>
                        </div>
                    </span>
                   </a>
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