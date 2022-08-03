import React from 'react';
import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { sale, saleTime, buttonText, mediumText, details, image } }) => {
  return (
    <>
      <div className="footer-banner-component">

        <div className="left-side">
        <h3>{sale}</h3>
        <h4>{saleTime}</h4>
        </div>

        <img className='footer-image' src={urlFor(image)} width='300' alt="" />

        <div className="right-side">
        <p>{mediumText}</p>
        <p>{details}</p>
        <button>{buttonText}</button>
        </div>
      </div>
    </>
  )
}

export default FooterBanner