import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import SpotCard from "./SpotCard";

const TouristSpotHome = () => {
  const [spotInfo, setSpotInfo] = useState([]);
  const [ loading,setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios.get("https://nova-tourism-server.vercel.app/countrySpot").then((res) => {
      // console.log(res.data);
      setSpotInfo(res.data);
      setLoading(false);
    });
  }, []);
  if(loading) {return <div className="w-full min-h-[calc(100vh-349px)] flex items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div>;}
  return (
    <div className="mt-10">
      
     <div className="max-w-7xl mx-auto "> 
     <h1
        data-aos="fade-down"
        className="text-3xl lg:text-5xl font-bold font-bugrasimo text-center mt-7 my-3 dark:text-gray-200 text-gray-900"
      >
        Tourist Spot
      </h1>
      <p data-aos="fade-down" data-aos-delay={100} className="text-center text-black dark:text-gray-100">
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
