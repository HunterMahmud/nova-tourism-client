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

const ICON = icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconSize: [20, 32],
});
const AboutUs = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
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
              Discover Southeast Asia's wonders with our travel management
              services. From pristine beaches to ancient temples, we ensure
              seamless experiences tailored to your preferences. Explore,
              indulge, and create memories effortlessly.
            </p>
          </div>
          {/* faq started */}
          <div className="my-10 space-y-2">
            <div
              data-aos="fade-up"
              data-aos-delay={100}
              className="collapse  collapse-plus bg-base-200"
            >
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How long does it take to buy or sell a home?
              </div>
              <div className="collapse-content">
                <p>
                  Several factors determine how long the process of buying or
                  selling real  takes. The most important of these factors
                  is the season in which you begin to offer it for sale.
                </p>
                <br />
                <p>
                  The real  market, like other investments, is based on
                  the principle of supply and demand. Real  is on-demand
                  in certain seasons of the year. It is not possible to
                  ascertain a specific time as it can vary according to the
                  circumstances of each season. You may find the right home for
                  you within a week, or the search process can last for months.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={100}
              className="collapse collapse-plus bg-base-200"
            >
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What kind of credit score do I need to buy a home?
              </div>
              <div className="collapse-content">
                <p>
                  Most loan programs require a FICO score of 620 or better.
                  Borrowers with higher credit scores represent less risk to the
                  lender, often resulting in a lower the down payment
                  requirement and better interest rate. Conversely, home
                  shoppers with lower credit scores may need to bring more money
                  to the table (or accept a higher interest rate) to offset the
                  lender's risk.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={100}
              className="collapse collapse-plus bg-base-200"
            >
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How much do I need for a down payment?
              </div>
              <div className="collapse-content">
                <p>
                  The financial aspect is one of the main factors that dominate
                  the real  purchase process. People are confused about
                  their ability to determine a specific amount to pay as a down
                  payment and what percentage is appropriate for them. The down
                  payment is the percentage that the customer pays out of the
                  total amount, and the required down payment ranges from 5% to
                  10%. While it is always recommended to pay a higher down
                  payment such as 20%.
                </p>{" "}
                <br />
                <p>
                  The higher the percentage of the down payment, the lower the
                  value of the installments that are paid and the easier it is
                  for you to pay them, and the lower the value of the interest
                  that is increased in the case of installments. We always
                  advise you to consult with your real  broker and tell
                  him the limits of the amount that you intend to pay as a down
                  payment, and he will help you in getting an offer that matches
                  your financial plans.{" "}
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={100}
              className="collapse collapse-plus bg-base-200"
            >
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Should I sell my current home before buying a new one?
              </div>
              <div className="collapse-content">
                <p>
                  If the built-up equity in your current home will be applied to
                  the down payment on the new home, naturally the former will
                  need to be sold first.
                </p>{" "}
                <br />
                <p>
                  {" "}
                  Some home buyers decide to turn their current home into an
                  investment property, renting it out. In that case, the current
                  home will not need to be sold. However, your loan advisor will
                  still need to evaluate your risk profile and credit history to
                  determine whether making a loan on a new home is feasible
                  while retaining title to the old home.
                </p>{" "}
                <br />
                <p>
                  Buyers often have a short time frame to sell their current
                  home when relocating to a new city because of a job transfer.
                  If you are moving but taking a position with the same
                  employer, check to see if they offer relocation assistance to
                  help offset some of the costs.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={100}
              className="collapse collapse-plus bg-base-200"
            >
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How many homes should I view before buying one?
              </div>
              <div className="collapse-content">
                <p>
                  That's up to you! For sure, home shopping today is easier
                  today than ever before. The ability to search for homes online
                  and see pictures, even before setting a foot outside the
                  comfort of your living room, has completely changed the home
                  buying game. Convenience is at an all-time high. But, nothing
                  beats visiting a home to see how it looks and 'feels' in
                  person.
                </p>
              </div>
            </div>
          </div>
          {/* faq ends */}
          <div
            data-aos="fade-up"
            data-aos-delay={200}
            className="stats rounded-lg bg-card text-black shadow w-full"
          >
            <div className="stat text-center">
              <div className="stat-title text-gray-700">Apartment Houses</div>
              <div className="stat-value">35</div>
            </div>

            <div className="stat text-center">
              <div className="stat-title text-gray-700">Total Houses</div>
              <div className="stat-value">2.3k</div>
            </div>

            <div className="stat text-center">
              <div className="stat-title text-gray-700">Happry Customers</div>
              <div className="stat-value">1.3k</div>
            </div>
          </div>
          <div className="my-10">
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
                  "I highly recommend this website to anyone planning a trip. The attention to detail and personalized recommendations made my vacation unforgettable. I'll definitely be using their services again!"
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
                  "I was delighted by how easy it was to find my dream vacation on this website. The layout is well-decorated, making it a joy to explore. It's like each page was designed to inspire wanderlust! Planning my next adventure has never been more enjoyable."
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
                  "I love how this website is both easy to navigate and beautifully decorated. Finding my next travel destination feels like flipping through a travel magazine. It's a pleasure to explore, and planning my trips has never been simpler!"."
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
