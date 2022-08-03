import React from 'react';
import { urlFor } from '../lib/client';


const HeroBanner = ({ heroBanner }) => {
  return (
    <>
      <div className="hero-banner-container">

        <div className="left-side">
        <h2>{heroBanner.bigText}</h2>
        <button>{heroBanner.buttonText}</button>
        </div>

        <img className='hero-image' src={urlFor(heroBanner.image)} width='300'  alt="image of a keyboard" />

        <div className="right-side">
        <p>{heroBanner.mediumText}</p>
        <p>{heroBanner.details}</p>
        </div>

      </div>
    </>
  )
}

export default HeroBanner