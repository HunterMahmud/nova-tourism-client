import React from "react";

const WhatPeopleSay = () => {
  return (
    <div className="my-10 mx-2">
      <div className="max-w-7xl mx-auto ">
        <h2
          data-aos="fade-down"
          data-aos-delay={300}
          className="text-2xl mb-7 sm:text-3xl  font-bugrasimo text-black dark:text-gray-100 font-semibold text-center"
        >
          What People Say
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay={400}
          className="flex  flex-col lg:flex-row mx-auto gap-3"
        >
          <div className="max-w-md mx-auto p-6 overflow-hidden rounded-lg shadow bg-card dark:bg-gray-600 text-black dark:text-gray-200">
            <article>
              <h2 className="text-center text-5xl">"</h2>
              <p className=" text-xl text-black dark:text-gray-200">
                "I highly recommend this website to anyone planning a trip. The
                attention to detail and personalized recommendations made my
                vacation unforgettable. I'll definitely be using their services
                again!"
              </p>
              <div className="flex items-center mt-8 space-x-4">
                <img
                  src="https://i.ibb.co/4ZCCJMn/about4.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full bg-card"
                />
                <div>
                  <h3 className="text-sm font-medium font-bugrasimo">Mark Stivens</h3>
                  <p className="text-sm text-black dark:text-gray-300">NYC</p>
                </div>
              </div>
            </article>
          </div>
          <div className="max-w-md mx-auto p-6 overflow-hidden rounded-lg shadow bg-card text-black dark:bg-gray-600 dark:text-gray-200">
            <article>
              <h2 className="text-center text-5xl">"</h2>
              <p className=" text-xl text-black dark:text-gray-200">
                "I was delighted by how easy it was to find my dream vacation on
                this website. The layout is well-decorated, making it a joy to
                explore. It's like each page was designed to inspire wanderlust!
                Planning my next adventure has never been more enjoyable."
              </p>
              <div className="flex items-center mt-8 space-x-4">
                <img
                  src="https://i.ibb.co/fXjycnb/about3.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full bg-card"
                />
                <div>
                  <h3 className="text-sm font-medium font-bugrasimo">Michael Green</h3>
                  <p className="text-sm text-black dark:text-gray-300">Los Angeles</p>
                </div>
              </div>
            </article>
          </div>
          <div className="max-w-md mx-auto p-6 overflow-hidden rounded-lg shadow dark:bg-gray-600 dark:text-gray-200 bg-card text-black">
            <article>
              <h2 className="text-center text-5xl">"</h2>
              <p className=" text-xl text-black dark:text-gray-200">
                "I love how this website is both easy to navigate and
                beautifully decorated. Finding my next travel destination feels
                like flipping through a travel magazine. It's a pleasure to
                explore, and planning my trips has never been simpler!"."
              </p>
              <div className="flex items-center mt-8 space-x-4">
                <img
                  src="https://i.ibb.co/F4tYV3v/about2.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full bg-card"
                />
                <div>
                  <h3 className="text-sm font-medium font-bugrasimo">Wendy Moore</h3>
                  <p className="text-sm text-black dark:text-gray-300">Washington</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;
