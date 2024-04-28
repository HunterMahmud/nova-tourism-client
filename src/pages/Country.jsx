import React from "react";
import { useLoaderData } from 'react-router-dom';
import SpotCountryCard from './../components/SpotCountryCard';

const Country = () => {
    const country = useLoaderData();
    // console.log(country);
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h2
          data-aos="fade-down"
          data-aos-delay={100}
          className="text-3xl mt-10 lg:text-4xl font-semibold text-center"
        >
          {country._id} 
        </h2>
        <p
          data-aos="fade-down"
          data-aos-delay={150}
          className="md:text-lg text-center text-gray-800"
        >
          Tourist spot in {country._id} are here.
        </p>
        <div className="my-8  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                country?.data.map(spot=> <SpotCountryCard key={spot._id} spot={spot}/>)
            }
        </div>
      </div>
    </div>
  );
};

export default Country;
