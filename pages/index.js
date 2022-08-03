import React from 'react'
import FooterBanner from '../components/FooterBanner';
import HeroBanner from '../components/HeroBanner';
import Product from '../components/Product';
import { client } from '../lib/client';

const Home = ({ products, bannerData }) => {
  return (
    <>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]}  /> 

        <div className="home-page-component">
        <h3>Best selling products</h3>
        <p>Get the top products on the market</p>
        <div className="best-selling-container">
        {products.map((product) => <Product key={product._id} product={product}/>)}
        </div>
        </div>

        <FooterBanner footerBanner={bannerData.length && bannerData[1]}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  
  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);
  
  return {
    props: { products, bannerData }
  }
}

export default Home