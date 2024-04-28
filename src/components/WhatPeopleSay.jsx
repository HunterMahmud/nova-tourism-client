import React from "react";

const WhatPeopleSay = () => {
  return (
    <div className="my-10">
      <div className="max-w-7xl mx-auto ">
        <h2
          data-aos="fade-down"
          data-aos-delay={300}
          className="text-2xl mb-7 sm:text-3xl  font-poppins text-black font-semibold text-center"
        >
          What People Say
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay={400}
          className="flex flex-col md:flex-row mx-auto gap-3"
        >
          <div className="max-w-md mx-auto p-6 overflow-hidden rounded-lg shadow bg-card text-black">
            <article>
              <h2 className="text-center text-5xl">"</h2>
              <p className=" text-xl text-black">
                "I highly recommend this website to anyone planning a trip. The
                attention to detail and personalized recommendations made my
                vacation unforgettable. I'll definitely be using their services
                again!"
              </p>
              <div className="flex items-center mt-8 space-x-4">
                <img
                  src="https://source.unsplash.com/man-wearing-green-polo-shirt-6anudmpILw4"
                  alt=""
                  className="w-10 h-10 rounded-full bg-card"
                />
                <div>
                  <h3 className="text-sm font-medium">Mark Stivens</h3>
                  <p className="text-sm text-black">NYC</p>
                </div>
              </div>
            </article>
          </div>
          <div className="max-w-md mx-auto p-6 overflow-hidden rounded-lg shadow bg-card text-black">
            <article>
              <h2 className="text-center text-5xl">"</h2>
              <p className=" text-xl text-black">
                "I was delighted by how easy it was to find my dream vacation on
                this website. The layout is well-decorated, making it a joy to
                explore. It's like each page was designed to inspire wanderlust!
                Planning my next adventure has never been more enjoyable."
              </p>
              <div className="flex items-center mt-8 space-x-4">
                <img
                  src="https://source.unsplash.com/man-wearing-black-and-white-top-7omHUGhhmZ0"
                  alt=""
                  className="w-10 h-10 rounded-full bg-card"
                />
                <div>
                  <h3 className="text-sm font-medium">Michael Green</h3>
                  <p className="text-sm text-black">Los Angeles</p>
                </div>
              </div>
            </article>
          </div>
          <div className="max-w-md mx-auto p-6 overflow-hidden rounded-lg shadow bg-card text-black">
            <article>
              <h2 className="text-center text-5xl">"</h2>
              <p className=" text-xl text-black">
                "I love how this website is both easy to navigate and
                beautifully decorated. Finding my next travel destination feels
                like flipping through a travel magazine. It's a pleasure to
                explore, and planning my trips has never been simpler!"."
              </p>
              <div className="flex items-center mt-8 space-x-4">
                <img
                  src="https://source.unsplash.com/a-man-in-a-yellow-shirt-smiling-at-the-camera-ZjDbRtR_BcE"
                  alt=""
                  className="w-10 h-10 rounded-full bg-card"
                />
                <div>
                  <h3 className="text-sm font-medium">Wendy Moore</h3>
                  <p className="text-sm text-black">Washington</p>
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
