import React from "react";
import SpotCard from "./SpotCard";

const SingleCountry = ({ country }) => {
  return (
    // my-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5
    <div className="my-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
      {country.map((spot) => (
        <SpotCard key={spot._id} spot={spot} />
      ))}
    </div>
  );
};

export default SingleCountry;
