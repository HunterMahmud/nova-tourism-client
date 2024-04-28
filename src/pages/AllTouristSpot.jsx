import React, { useEffect, useState } from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const AllTouristSpot = () => {
  const loadedSpotInfo = useLoaderData();
  // console.log(JSON.stringify(spotInfo));
  const [sortOrder, setSortOrder] = useState(0);
  const [spotInfo, setSpotInfo] = useState(loadedSpotInfo);
  useEffect(() => {
    if (sortOrder == 1) {
      axios.get("http://localhost:5000/allSpot/sortOrder/1").then((res) => {
        // console.log(res.data);
        setSpotInfo(res.data);
      });
    } else if (sortOrder == 2) {
      axios.get("http://localhost:5000/allSpot/sortOrder/2").then((res) => {
        // console.log(res.data);
        setSpotInfo(res.data);
      });
    } else {
      axios.get("http://localhost:5000/allSpot").then((res) => {
        // console.log(res.data);
        setSpotInfo(res.data);
      });
    }
  }, [sortOrder]);
  const handleSetSortOrder = (orderId) => {
    // console.log(orderId.target.value);
    setSortOrder(orderId.target.value);
  };
  return (
    <div>
      <Helmet>
        <title>All Tourist Spot | Nova Travel</title>
      </Helmet>
      <ScrollRestoration />
      <div className="max-w-7xl mx-auto">
        <h2
          data-aos="fade-down"
          data-aos-delay={100}
          className="text-3xl mt-10 lg:text-4xl font-semibold text-center"
        >
          All Tourist Spot
        </h2>
        <p
          data-aos="fade-down"
          data-aos-delay={150}
          className="md:text-lg text-center mt-8 text-gray-800"
        >
          All the favorite tourist spot here.
        </p>
        <div className="mx-2">
          <select
            onChange={handleSetSortOrder}
            value={sortOrder}
            id="cname"
            type="text"
            required={true}
            className="rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
          >
            <option value="0">
              Sort By Average Cost
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
