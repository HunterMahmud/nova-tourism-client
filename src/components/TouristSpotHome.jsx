import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";
import SpotCard from "./SpotCard";

const TouristSpotHome = () => {
  const [spotInfo, setSpotInfo] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/countrySpot").then((res) => {
      console.log(res.data);
      setSpotInfo(res.data);
    });
  }, []);
  return (
    <div>
      <Helmet>
        <title>All Tourist Spot | Nova Travel</title>
      </Helmet>
      <ScrollRestoration />
     <div className="max-w-7xl mx-auto "> 
     <h1
        data-aos="fade-down"
        data-aos-delay={100}
        className="text-3xl lg:text-5xl font-bold font-poppins text-center mt-7 my-3 text-gray-900"
      >
        All Tourist Spot
      </h1>
      <p data-aos="fade-down" data-aos-delay={100} className="text-center">
        All the favorite tourist spot here.
      </p>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {spotInfo.map((spot) => (
          <SpotCard key={spot._id} spot={spot} />
        ))}
      </div>
     </div>
    </div>
  );
};

export default TouristSpotHome;
