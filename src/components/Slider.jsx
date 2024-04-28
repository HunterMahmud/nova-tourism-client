import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

// "Journey into Discovery"-
// "Find Your Wanderlust",
// "Seek Adventure Ahead",
// "Explore the Unseen",
// "Roam and Revel",
// "Discover Your Next Adventure",
// "Explore Hidden Gems",
// "Embark on Your Journey",
// "Uncover New Destinations",
// "Experience Exciting Travel",

const Slider = () => {
  return (
    <div className="relative">
      <div
        data-aos="fade-right"
        className="absolute top-[40%] left-12 md:left-20 w-[70%]  z-10"
      >
        <div className=" h-[40%] max-w-[900px] text-white p-5">
          <h1 className="text-2xl md:text-5xl uppercase font-bugrasimo ">
            {" "}
            <Typewriter
              words={[
                "Find your next Tourist Spot",
                "Journey into Discovery",
                "Find Your Wanderlust",
                "Seek Adventure Ahead",
                "Explore the Unseen",
                "Roam and Revel",
                "Discover Your Next Adventure",
                "Explore Hidden Gems",
                "Embark on Your Journey",
                "Uncover New Destinations",
                "Experience Exciting Travel",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-[35px] md:text-[50px] ">&rarr;</span>
            <Link
              to="/allspot"
              className=" mt-2 p-2 border border-blue-500 rounded-md text-sm lg:text-base"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/green-trees-on-mountain-under-white-clouds-during-daytime-_vL6mbbHZkI")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/green-trees-and-green-grass-during-daytime-RSIBHeDjKeQ")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/blue-and-white-boat-on-sea-under-blue-sky-during-daytime-fUrrQ4y-ENI")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/person-surfing-on-sea-during-daytime-HfcyrSsA51E")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/brown-and-white-deer-during-daytime-v6A4nXxqkFo")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
