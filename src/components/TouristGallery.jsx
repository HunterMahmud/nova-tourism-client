import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";

const TouristGallery = () => {
  return (
    <div data-aos="fade-up" className="mx-2 my-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row text-center lg:text-left text-black ">
        <div className="p-3">
          <h2 data-aos="fade-down" data-aos-delay={100} className="text-3xl lg:text-4xl font-semibold">Introducing A Travel Spot Gallery</h2>
          <p className="md:text-lg mt-8 text-gray-800">
          Explore our Travel Gallery, where luxury meets convenience. From chic studios to lavish penthouses, each space is crafted for the modern traveler. Welcome to your ultimate wanderlust haven.
          </p>
          <Link to='/allSpot' className="btn btn-primary bg-violet-500 text-white mt-5">Explore More</Link>
        </div>
        <div data-aos="fade-up" data-aos-delay={100}  className="lg:mx-3">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={true}
          >
            <SwiperSlide>
             <img className="w-full h-[300px] sm:h-[400px]" src="https://source.unsplash.com/brown-boat-on-sea-shore-during-daytime-dqE0_ZUegO8" alt="" />
             
            </SwiperSlide>
            <SwiperSlide>
             <img className="w-full h-[300px] sm:h-[400px]" src="https://source.unsplash.com/white-boat-on-sea-near-green-and-brown-mountain-during-daytime-nFLhhAxN1EE" alt="" />
             
            </SwiperSlide>
            <SwiperSlide>
             <img className="w-full h-[300px] sm:h-[400px]" src="https://source.unsplash.com/orange-temples-during-daytime-B64B6-kAWlw" alt="" />
             
            </SwiperSlide>
          
            <SwiperSlide>
              {" "}
              <div className="w-full h-[300px] sm:h-[400px] object-cover bg-cover bg-[url('https://source.unsplash.com/island-under-white-sky-exFdOWkYBQw')] bg-center bg-no-repeat"></div>
            </SwiperSlide>
          
            <SwiperSlide>
              {" "}
              <div className="w-full h-[300px] sm:h-[400px] object-cover bg-cover bg-[url('https://source.unsplash.com/the-shah-alam-captured-during-sunset-malaysia-3d2QsZFcT0w')] bg-center bg-no-repeat"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="w-full h-[300px] sm:h-[400px] object-cover bg-cover bg-[url('https://source.unsplash.com/tow-boats-on-body-of-water-vrmumizr3B0')] bg-center bg-no-repeat"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="w-full h-[300px] sm:h-[400px] object-cover bg-cover bg-[url('https://source.unsplash.com/a-close-up-of-a-cave-m2oc3vTO84k')] bg-center bg-no-repeat"></div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="w-full h-[300px] sm:h-[400px] object-cover bg-cover bg-[url('https://source.unsplash.com/people-walking-on-park-near-trees-and-building-during-daytime-gt3gK_Wob2g')] bg-center bg-no-repeat"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TouristGallery;


/*

blue-and-white-boat-on-sea-under-blue-sky-during-daytime-fUrrQ4y-ENI
a-boat-traveling-down-a-river-next-to-a-lush-green-hillside-bhJRm6K3YFo
a-group-of-people-riding-on-the-back-of-a-boat-BixjuB4xe0w
boat-on-sea-R-sU0S6GDm4
brown-boat-on-sea-shore-during-daytime-dqE0_ZUegO8


floating-market-bangkok-thailand-Ac0Sw2LZoqE
orange-temples-during-daytime-B64B6-kAWlw
shallow-focus-photo-of-gautama-buddha-statue-Hz-N7tCgCUo
/aerial-photography-of-gray-concrete-building-0H4xugLX_G8
white-boat-on-sea-near-green-and-brown-mountain-during-daytime-nFLhhAxN1EE



green-grass-field-photography-7hww7t6NLcg
green-rice-field--2WlTWZLnRc
island-under-white-sky-exFdOWkYBQw ----
a-large-group-of-stone-structures-with-a-full-moon-in-the-background-tp2_sh2HrNE





city-buildings-under-white-cloudy-sky-during-daytime-_qqas3YcNm4
the-shah-alam-captured-during-sunset-malaysia-3d2QsZFcT0w ---
green-leafed-trees-near-body-of-water-under-blue-sky-LbjcsNneKCY
tow-boats-on-body-of-water-vrmumizr3B0---



body-of-water-near-mountain-during-daytime-p3zbb3Efczw
lighted-up-concrete-buildings-vGcRek7WS5s
white-and-brown-boat-on-water-near-city-buildings-during-daytime-NuBqNEZvTwU
a-close-up-of-a-cave-m2oc3vTO84k
a-close-up-of-a-cave-KB3r2qbAj4o


people-walking-on-park-near-trees-and-building-during-daytime-gt3gK_Wob2g
a-stone-gate-surrounded-by-trees-in-a-forest--T_7KjQjAJ0
the-entrance-to-an-ancient-temple-in-the-jungle-o4ispOaaO48
aerial-view-of-city-buildings-during-daytime-VoLyNETLCSU




*/