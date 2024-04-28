import React, { useState } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const NotFound = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
    document.querySelector("html").setAttribute("class", localTheme);
  }, [theme]);

  return (
    <section className="flex items-center  min-h-screen p-16 bg-main dark:bg-gray-900 text-gray-100">
      <Helmet>
        <title>Not Found | Nova Travel</title>
      </Helmet>
      <ScrollRestoration />
      <div
        data-aos="zoom-in"
        className="container flex flex-col items-center justify-center px-5 mx-auto my-8"
      >
        <div  data-aos="zoom-in"
            data-aos-delay={100}
            className="max-w-md text-center">
          <h2
           
            className="mb-8 font-extrabold font-bugrasimo text-9xl text-gray-700 dark:text-gray-100"
          >
            404
          </h2>
          <p
         
            className="text-2xl text-gray-800 font-semibold md:text-3xl font-bugrasimo dark:text-gray-200"
          >
            Sorry, we couldn't find this page.
          </p>
          <p
           
            className="mt-4 mb-8 text-gray-600 dark:text-gray-200"
          >
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <div >
            <Link
              to="/"
              className="px-8 py-3 font-semibold font-bugrasimo rounded bg-violet-500 text-white"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;