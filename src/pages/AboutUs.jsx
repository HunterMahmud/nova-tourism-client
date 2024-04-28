import React from "react";
import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import 'leaflet/0.7.7/leaflet.css';

import { db } from "./../Firebase/firebase.config";
import { icon } from "leaflet";
import axios from "axios";
import { useEffect } from "react";
import WhatPeopleSay from "../components/WhatPeopleSay";

const ICON = icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconSize: [20, 32],
});
//this is the desc i added to the database
// const ct1 = {
//   Bangladesh:
//     "Explore Sundarbans' mangrove forests, Cox's Bazar's sandy beaches, and Srimangal's lush tea gardens.",
//   Thailand:
//     "Discover Bangkok's Grand Palace, Phi Phi Islands' pristine beaches, and Chiang Mai's vibrant night bazaar.",
//   Indonesia:
//     "Encounter Borobudur's ancient temple, Bali's cultural charm, and Komodo's legendary dragons.",
//   Malaysia:
//     "Experience Kuala Lumpur's Petronas Towers, Langkawi's scenic beauty, and Taman Negara's rainforest adventures.",
//   Vietnam:
//     "Cruise Ha Long Bay's limestone karsts, wander Hoi An's ancient streets, and explore the Mekong Delta's waterways.",
//   Cambodia:
//     "Witness Angkor Wat's majestic temples, shop at Siem Reap's night market, and relax on Sihanoukville's beaches.",
// };
// const photos = {
//   Bangladesh:
//     "https://source.unsplash.com/black-boat-on-sea-shore-during-daytime-Ph5VL5Tilto",
//   Thailand:
//     "https://source.unsplash.com/five-brown-wooden-boats-jWKk-0ZBUyg",
//   Indonesia:
//     "https://source.unsplash.com/aerial-photography-of-rice-terraces-during-daytime-XEhchWQuWyM",
//   Malaysia:
//     "https://source.unsplash.com/architectural-photography-of-lighted-city-buildings-N2SKNqLcgr0",
//   Vietnam:
//     "https://source.unsplash.com/aerial-view-of-city-at-daytime-9r2yeRccyls",
//   Cambodia:
//     "https://source.unsplash.com/angkor-wat-temple-cambodia-iconic-landmark-with-reflection-in-water-LN17dtIsN7o",
// };

const AboutUs = () => {
  //took all added data and make them in a country wise array then add desc and put in the database
  // don't uncomment this

  // useEffect(() => {
  //   axios.get("https://nova-tourism-server.vercel.app/allSpotCountry").then((res) => {
  //     //console.log(JSON.stringify(res.data));
  //     // setSpotInfo(res.data);
  //     // console.log(res.data);
  //     let newCountry = res.data;
  //     // console.log(newCountry);
  //     for (let x = 0; x < 6; x++) {
  //       newCountry[x].desc = ct1[newCountry[x]._id];
  //       newCountry[x].photo = photos[newCountry[x]._id];
  //     }
  //     console.log(newCountry);
  //     axios.post('https://nova-tourism-server.vercel.app/countries/data',newCountry )
  //     .then(res=> {
  //       console.log(res.data);
  //     })
  //   });
  // }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    const email = e.target.email.value;
    const name = e.target.name.value;
    const message = e.target.message.value;
    // console.log(email, name , message);
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        email,
        name,
        message,
      });

      // console.log('Document written with ID: ', docRef.id);
      toast.success("Data saved to firebase.");
      e.target.reset();
    } catch (error) {
      toast.error("Error occured!");
    }
  };
  return (
    <div>
      <Helmet>
        <title>About Us | Nova Travel</title>
      </Helmet>

      <ScrollRestoration />
      <div className=" flex flex-col items-center justify-center h-[300px]  object-cover bg-cover bg-[linear-gradient(45deg,rgba(0,0,0,0.5),rgba(0,0,0,0)),url('https://source.unsplash.com/three-brown-wooden-boat-on-blue-lake-water-taken-at-daytime-T7K4aEPoGGk')] bg-center bg-no-repeat">
        <h2
          data-aos="fade-down"
          className="text-2xl sm:text-4xl lg:text-5xl font-poppins text-white"
        >
          About Us
        </h2>
        <span
          data-aos="fade-up"
          data-aos-delay={100}
          className="text-sm text-white text-center"
        >
          Our Mission
        </span>
      </div>
      <div className="mx-2">
        <div className="max-w-7xl mx-auto">
          <div className="my-10">
            <h2
              data-aos="fade-up"
              data-aos-delay={100}
              className="text-2xl mb-3 sm:text-3xl font-poppins text-black font-semibold text-center"
            >
              About Our Company
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay={200}
              className="text-center text-gray-800 text-lg"
            >
              Embark on an unforgettable journey through the enchanting landscapes of Southeast Asia with our comprehensive travel management services. Dive into the azure depths of pristine beaches, marvel at the intricate beauty of ancient temples, and immerse yourself in the rich tapestry of culture and tradition. With meticulous attention to detail and personalized itineraries crafted to your preferences, we guarantee seamless experiences that transcend expectations. Explore, indulge, and create cherished memories effortlessly with us by your side.
            </p>
          </div>
        
          <WhatPeopleSay />
          <section
            data-aos="fade-up"
            data-aos-delay={300}
            className="py-6 rounded-lg bg-card my-10 text-black"
          >
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
              <div
                data-aos="fade-up"
                data-aos-delay={400}
                className="py-6 md:py-0 md:px-6"
              >
                <h1 className="text-4xl font-bold">Get in touch</h1>
                <p className="pt-2 pb-4">
                  Fill in the form to start a conversation
                </p>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>6000, Rajshahi, BD</span>
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    <span>+8801798120845</span>
                  </p>
                  <p className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-2 sm:mr-6"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <span>info@novatravel.com</span>
                  </p>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                data-aos="fade-up"
                data-aos-delay={500}
                className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
              >
                <label className="block">
                  <span className="mb-1">Name</span>
                  <input
                    type="text"
                    name="name"
                    required={true}
                    placeholder="Bill Gates"
                    className="block w-full p-2 placeholder:text-gray-600 rounded-md shadow-sm  bg-gray-100 border border-gray-600 "
                  />
                </label>
                <label className="block">
                  <span className="mb-1">Email</span>
                  <input
                    type="email"
                    name="email"
                    required={true}
                    placeholder="bill@gates.com"
                    className="block w-full p-2 placeholder:text-gray-600 rounded-md shadow-sm  bg-gray-100 border border-gray-600 "
                  />
                </label>
                <label className="block">
                  <span className="mb-1">Message</span>
                  <textarea
                    required={true}
                    rows="3"
                    name="message"
                    placeholder="Your message"
                    className="block w-full p-2 placeholder:text-gray-600 rounded-md shadow-sm  bg-gray-100 border border-gray-600 "
                  ></textarea>
                </label>
                <input
                  type="submit"
                  value={"Send"}
                  className="self-center px-8 py-3 text-lg rounded font-poppins font-bold text-white hover:cursor-pointer  bg-violet-500"
                />
              </form>
            </div>
          </section>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-full my-10 mb-28 mx-auto h-[400px] lg:h-[500px] "
          >
            <h2 className="text-2xl mb-7 sm:text-3xl  font-poppins text-black font-semibold">
              Our Location: 6000 Rajshahi, BD
            </h2>
            <MapContainer
              center={[24.382001, 88.602329]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker icon={ICON} position={[24.382001, 88.602329]}>
                <Popup>Nova Travel, Rajshahi</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
