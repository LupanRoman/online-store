import React from 'react';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';


const ProductDetails = ({ product, products }) => {

    const { image, name, price, description } = product;
    const { qty, incQty, decQty, addToCart, quantity } = useStateContext()

  return (
    <>
        <div className="product-details-component">
            <div className="product-image">
            <img src={urlFor(image)} width='300' alt="" />

            </div>

            <div className="product-details">
                <h5>{name}</h5>
                <p>${price}</p>
                <p>{description}</p>
                <div className="qty-btn">
                    <button onClick={decQty} className='minus'>-</button>
                    <p className='qty'>{qty}</p>
                    <button onClick={incQty} className='plus'>+</button>
                </div>
                <button onClick={() => addToCart(product, qty)} className='add-to-cart'>Add to cart</button>
            </div>
        </div>
    </>
  )
}

// Need to understand this part

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
        props: { products, product}
    }
} 

export default ProductDetails