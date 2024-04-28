import React from "react";
import { Helmet } from "react-helmet-async";
import CountriesSection from "../components/CountriesSection";
import TouristGallery from "../components/TouristGallery";
import TouristSpotHome from "../components/TouristSpotHome";
import Slider from "./../components/Slider";
// import SmartHourseGallery from './../components/SmartHourseGallery';
// import TrustedByCompany from '../components/TrustedByCompany';
import { IoCall } from 'react-icons/io5';
import WhatPeopleSay from "../components/WhatPeopleSay";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Nova Travel</title>
      </Helmet>
      <Slider />

      <TouristSpotHome />
      <CountriesSection/>
      <TouristGallery />
      <WhatPeopleSay/>
      
    </div>
  );
};

export default Home;
