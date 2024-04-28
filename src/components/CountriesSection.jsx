import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const CountriesSection = () => {
  const [countryInfo, setCountryInfo] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/countries/data").then((res) => {
      // console.log(res.data);
      setCountryInfo(res.data);
    });
  }, []);
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h2
          data-aos="fade-down"
          data-aos-delay={100}
          className="text-3xl mt-10 lg:text-4xl font-semibold text-center"
        >
          Countries Section
        </h2>
        <p
          data-aos="fade-down"
          data-aos-delay={150}
          className="md:text-lg text-center text-gray-800"
        >
          All the country wise favorite tourist spot here.
        </p>
        <div className="my-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-5 ">
         {
          countryInfo.map(country=>  <CountryCard key={country._id} country={country}/>)
         }
        </div>
      </div>
    </div>
  );
};

export default CountriesSection;

/*
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import SingleCountry from "./SingleCountry";

const CountriesSection = () => {
  const [spotInfo, setSpotInfo] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/allSpotCountry").then((res) => {
      // console.log(res.data);
      setSpotInfo(res.data);
    });
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h2
          data-aos="fade-down"
          data-aos-delay={100}
          className="text-3xl mt-10 lg:text-4xl font-semibold text-center"
        >
          Countries Section
        </h2>
        <p
          data-aos="fade-down"
          data-aos-delay={150}
          className="md:text-lg text-center text-gray-800"
        >
          All the country wise favorite tourist spot here.
        </p>
       <div className="">  // my-8 grid grid-cols-1  md:grid-cols-2  gap-5 
       {spotInfo.map((country) => (
        <div className="flex flex-col items-center justify-center" key={country._id}>
          <span className="text-center text-lg mt-7 font-bold">{country._id}</span>
          <SingleCountry country={country.data} />
        </div>
      ))}
    </div>
  </div>
</div>
);
};

export default CountriesSection;


*/
