import React from 'react';
import { urlFor } from '../lib/client';
import Link from 'next/link';

const Product = ({ product: { image, name, slug, price } }) => {
  

  return (
    <>
    <Link href={`/product/${slug.current}`}>
      <div className="product-component">
        <img src={urlFor(image)} width='200' alt="image with the products" />
        <h4>{name}</h4>
        <p>${price}</p>
      </div>
    </Link>
    </>
  )
}

export default Product