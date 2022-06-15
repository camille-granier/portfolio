import React from 'react';
import Image from 'next/image';
const Work = () => {
    return (
        <div className='work'>
            <ul>
                <li>Project 1
                    <a
                    href='https://ffnotes.com/'
                    rel='noreferrer'
                    target='_blank'>
                        <Image src='/img/ffnotes.png' 
                               alt='ffnotes thumbnail'
                               width={500}
                               height={263}/>
                    Final Fantasy Notes
                    </a>
                </li>
                <li>Project 2
                    <a
                    href='https://pictures-photo-gallery.herokuapp.com/'
                    rel='noreferrer'
                    target='_blank'>
                        <Image
                        src='/img/photogallery.png'
                        alt='photogallery thumbnail'
                        width={500}
                        height={263}/>
                    Photo Gallery
                    </a>
                </li>
                <li>Project 3
                    <a
                    href='https://complete-e-shop.web.app/'
                    rel='noreferrer'
                    target='_blank'>
                        <Image 
                        src='/img/eshop.png'
                        alt='eshop thumbnail'
                        width={500}
                        height={263}/>
                    E-shop
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Work;