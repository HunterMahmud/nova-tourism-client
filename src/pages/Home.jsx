import React from "react";
import { Helmet } from "react-helmet-async";
import TouristGallery from "../components/TouristGallery";
import TouristSpotHome from "../components/TouristSpotHome";
import Slider from "./../components/Slider";
// import SmartHourseGallery from './../components/SmartHourseGallery';
// import TrustedByCompany from '../components/TrustedByCompany';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Nova Travel</title>
      </Helmet>
      <Slider />

      <TouristSpotHome />
      <TouristGallery />
      {/* <TrustedByCompany/> */}
    </div>
  );
};

export default Home;
