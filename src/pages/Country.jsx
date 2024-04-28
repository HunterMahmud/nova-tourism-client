import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from 'react-router-dom';
import SpotCountryCard from './../components/SpotCountryCard';
import { ScrollRestoration } from 'react-router-dom';

const Country = () => {
    const country = useLoaderData();
    // console.log(country);
  return (
    <div>
      <Helmet>
          <title>{country._id} | Spot Nova Travel</title>
        </Helmet>
        <ScrollRestoration/>
      <div className="max-w-7xl mx-auto">
        
        <h2
          data-aos="fade-down"
          data-aos-delay={100}
          className="text-3xl mt-10 lg:text-4xl font-bugrasimo dark:text-gray-100 text-gray-900 font-semibold text-center"
        >
          {country._id} 
        </h2>
        <p
          data-aos="fade-down"
          data-aos-delay={150}
          className="md:text-lg mt-2 text-center dark:text-gray-200 text-gray-800"
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
