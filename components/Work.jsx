import React from 'react';
import Image from 'next/image';

const Work = () => {
    return (
      <div className="work" id="work">
        <h2 className='work-header'>Work</h2>
        <ul>
          <li className="ffnotes">
            <div className="work-card">
              <a 
              href="https://ffnotes.com/"
              rel="noreferrer" 
              target="_blank">
                <Image
                  src="/img/ffnotes.png"
                  alt="ffnotes thumbnail"
                  width="500"
                  height="263"
                />
              </a>
              <div className="work-card-text">
                <h2 className="work-title">Final Fantasy Notes</h2>
                <p>A tribute to the Final Fantasy franchise</p>
              </div>
            </div>
          </li>
          <li className="photo-gallery">
            <div className="work-card photo">
              <a
                href="https://pictyspace.com/"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src="/img/photogallery.png"
                  alt="photogallery thumbnail"
                  width="500"
                  height="263"
                />
              </a>
              <div className="work-card-text">
                <h2 className="work-title">Photo Gallery</h2>
                <p>Photo Gallery from Unsplash</p>
              </div>
            </div>
          </li>
          <li className="eshop">
            <div className="work-card">
              <a
                href="https://complete-e-shop.web.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src="/img/eshop.png"
                  alt="eshop thumbnail"
                  width="500"
                  height="263"
                />
              </a>
              <div className="work-card-text">
                <h2 className="work-title">eShop</h2>
                <p>eShop experience</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
};

export default Work;