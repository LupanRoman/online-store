import React from 'react'
import { client } from '../lib/client';

const Home = ({ products, bannerData }) => {
  return (
    <>
        HeroBanner 

        <div className="home-page-component">
        

        </div>

        FooterBanner
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