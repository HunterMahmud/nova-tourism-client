import React from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";
import { Helmet } from 'react-helmet-async';

const AllTouristSpot = () => {
  const spotInfo = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Helmet>
        <title>All Tourist Spot | Nova Travel</title>
      </Helmet>
      <ScrollRestoration/>
       <div className="max-w-7xl mx-auto">
       <h2 data-aos="fade-down" data-aos-delay={100} className="text-3xl mt-10 lg:text-4xl font-semibold text-center">Introducing A Travel Spot Gallery</h2>
          <p data-aos="fade-down" data-aos-delay={150} className="md:text-lg text-center mt-8 text-gray-800">
          Explore our Travel Gallery, where luxury meets convenience. From chic studios to lavish penthouses, each space is crafted for the modern traveler. Welcome to your ultimate wanderlust haven.
          </p>
      <div className="my-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
        {spotInfo.map((spot) => (
          <SpotCard key={spot._id} spot={spot} />
        ))}
      </div>
       </div>
    </div>
  );
};

export default AllTouristSpot;
