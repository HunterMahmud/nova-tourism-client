import React, { useEffect, useState } from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const AllTouristSpot = () => {
  const [loading, setLoading] = useState(true);
 
  // console.log(JSON.stringify(spotInfo));
  const [sortOrder, setSortOrder] = useState(0);
  const [spotInfo, setSpotInfo] = useState();
  useEffect(() => {
    setLoading(true);
    if (sortOrder == 1) {
      axios.get("https://nova-tourism-server.vercel.app/allSpot/sortOrder/1").then((res) => {
        // console.log(res.data);
        setSpotInfo(res.data);
        setLoading(false);
      });
    } else if (sortOrder == 2) {
      axios.get("https://nova-tourism-server.vercel.app/allSpot/sortOrder/2").then((res) => {
        // console.log(res.data);
        setSpotInfo(res.data);
        setLoading(false)
      });
    } else {
      axios.get("https://nova-tourism-server.vercel.app/allSpot").then((res) => {
        // console.log(res.data);
        setSpotInfo(res.data);
        setLoading(false);
      });
    }
  }, [sortOrder]);
  const handleSetSortOrder = (orderId) => {
    // console.log(orderId.target.value);
    setSortOrder(orderId.target.value);
  };
   if(loading) {return <div className="w-full bg-gray-100 dark:bg-gray-900 min-h-[calc(100vh-349px)] flex items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div>;}
  return (
    <div>
      <Helmet>
        <title>All Tourist Spot | Nova Travel</title>
      </Helmet>
      <ScrollRestoration />
      <div className="max-w-7xl mx-auto">
      <h1
        data-aos="fade-down"
        className="text-3xl lg:text-5xl font-bold font-bugrasimo text-center mt-7 my-3 dark:text-gray-100 text-gray-900"
      >
        All Tourist Spot
      </h1>
      <p data-aos="fade-down" data-aos-delay={100} className="text-center text-gray-900 dark:text-gray-200">
      All the favorite tourist spot here.
      </p>
        
        <div
        data-aos="fade-down"
        className="mx-2">
          
          <select
            onChange={handleSetSortOrder}
            value={sortOrder}
            id="cname"
            type="text"
            required={true}
            className="rounded-md dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
          >
            <option value="0">
              Sort Average Cost
            </option>
            <option value="1">Ascending</option>
            <option value="2">Descending</option>
          </select>
        </div>
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
