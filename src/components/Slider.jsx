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
          <h1 className="text-2xl dark:text-gray-200 md:text-5xl uppercase font-bugrasimo ">
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
              className=" mt-2 p-2 border font-bugrasimo border-blue-500 rounded-md text-sm lg:text-base"
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
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/5BPQzyV/banner1.jpg")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/tXTtFVs/banner2.jpg")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/xf2bknc/banner3.jpg")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/NmdZ2TF/banner4.jpg")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/Zf7LKG2/banner5.jpg")] bg-center bg-no-repeat`}
          ></div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/ng5z1PV/banner6.jpg")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/zr0qDZm/banner7.jpg")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/F6hWd2y/banner8.jpg")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/PD3zNkK/banner9.jpg")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://i.ibb.co/yhHttnx/banner10.jpg")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
