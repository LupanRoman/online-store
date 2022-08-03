import React from 'react';
import { AiFillInstagram, AiOutlineTwitter  } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
    <div className="footer-component">
      <div className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </div>
      <p>All rights reserved 2022</p>
    </div>

    </>
  )
}

export default Footer