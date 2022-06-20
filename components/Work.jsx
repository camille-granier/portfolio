import React from 'react';
import Image from 'next/image';
const Work = () => {
    return (
        <div className='work'
             id='work'>
            <ul>
                <li className='ffnotes'>
                    <div className='work-card'>
                    <a
                    href='https://ffnotes.com/'
                    rel='noreferrer'
                    target='_blank'>
                        <Image src='/img/ffnotes.png' 
                               alt='ffnotes thumbnail'
                               width={500}
                               height={263}/>
                    </a>
                    <h3 className='work-title'>Final Fantasy Notes</h3>
                    <p>A tribute to the Final Fantasy franchise</p>
                    </div>
                </li>
                <li className='photo-gallery'>
                    <div className='work-card'>
                    <a
                    href='https://pictures-photo-gallery.herokuapp.com/'
                    rel='noreferrer'
                    target='_blank'>
                        <Image
                        src='/img/photogallery.png'
                        alt='photogallery thumbnail'
                        width={500}
                        height={263}/>
                    <h3 className='work-title'>Photo Gallery</h3>
                    <p>Photo Gallery from Unsplash</p>
                    </a>
                    </div>
                </li>
                <li className='eshop'>
                    <div className='work-card'>
                        <a
                    href='https://complete-e-shop.web.app/'
                    rel='noreferrer'
                    target='_blank'>
                        <Image 
                        src='/img/eshop.png'
                        alt='eshop thumbnail'
                        width={500}
                        height={263}/>
                    </a>
                    <h3 className='work-title'>eShop</h3>
                    <p>eShop experience</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Work;