import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider from './../components/Slider';
// import SmartHourseGallery from './../components/SmartHourseGallery';
// import TrustedByCompany from '../components/TrustedByCompany';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Nova Estate</title>
            </Helmet>
            <Slider/>
           {/* <EstatePage/> */}
           {/* <SmartHourseGallery/> */}
           {/* <TrustedByCompany/> */}
        </div>
    );
};

export default Home;