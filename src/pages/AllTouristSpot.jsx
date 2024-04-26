import React from "react";
import { useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";

const AllTouristSpot = () => {
  const spotInfo = useLoaderData();
  // console.log(data);
  return (
    <div>
      <div className="my-8 grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5">
        {spotInfo.map((spot) => (
          <SpotCard key={spot._id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
