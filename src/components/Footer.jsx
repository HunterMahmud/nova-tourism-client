import React from "react";
import { Link } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <footer data-aos="fade-up"  className="px-4 divide-y bg-gray-900 text-gray-100">
      <div className="container max-w-7xl flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link to="/" className="flex justify-center lg:justify-start">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-violet-400 mx-2">
              <img
                className="rounded-full"
                src="https://i.ibb.co/n1cFnnS/nova-state.jpg"
                alt="Nova Travel"
              />
            </div>
            <span className="self-center font-bugrasimo text-2xl font-semibold">
              Nova Travel
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide font-bugrasimo font-semibold uppercase text-gray-50">
              All Travel Services
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Tourism Management
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Travel Services
                </a>
              </li>
              <li>
                <Link to='/aboutus'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-bugrasimo text-gray-50 font-semibold">Company</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <Link to="/aboutus">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase font-semibold text-gray-50 font-bugrasimo">Contact Us</h3>
            <ul className="space-y-1">
              <li>
                <a
                  className="flex items-center justify-start"
                  href="tel:+8801798120845"
                >
                  <IoCall className="text-lg" />
                  <span className="ml-1">+8801798120845</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-start"
                  href="https://maps.app.goo.gl/zgBVbuKqGP4kd4AWA"
                >
                  <FaMapLocationDot className="text-lg" />
                  <span className="ml-1">6000, Rajshahi, BD</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase font-semibold text-gray-50 font-bugrasimo">Social media</div>
            <div className="flex justify-start space-x-3">
              <a
                href="https://www.facebook.com/hasan.almahmud.101"
                title="Facebook"
                target="_blank"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>

              <a
                href="https://github.com/HunterMahmud"
                title="Github"
                target="_blank"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/huntermahmud/"
                title="Linkedin"
                target="_blank"
                className="flex items-center p-1"
              >
                <svg
                  className="w-7 h-7 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 32 32"
                >
                  <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM10.496,8.403c0.842,0 1.403,0.561 1.403,1.309c0,0.748 -0.561,1.309 -1.496,1.309c-0.842,0.001 -1.403,-0.561 -1.403,-1.309c0,-0.748 0.561,-1.309 1.496,-1.309zM12,20h-3v-8h3zM22,20h-2.824v-4.372c0,-1.209 -0.753,-1.488 -1.035,-1.488c-0.282,0 -1.224,0.186 -1.224,1.488c0,0.186 0,4.372 0,4.372h-2.917v-8h2.918v1.116c0.376,-0.651 1.129,-1.116 2.541,-1.116c1.412,0 2.541,1.116 2.541,3.628z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-400">
        © 2024 Nova Travel All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;