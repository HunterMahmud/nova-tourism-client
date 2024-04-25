import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <section className="flex items-center min-h-screen p-16 bg-main text-gray-100">
      <Helmet>
        <title>Not Found | Nova Estate</title>
      </Helmet>
      <ScrollRestoration />
      <div
        data-aos="zoom-in"
        className="container flex flex-col items-center justify-center px-5 mx-auto my-8"
      >
        <div className="max-w-md text-center">
          <h2
            data-aos="fade-up"
            data-aos-delay={100}
            className="mb-8 font-extrabold text-9xl text-gray-700"
          >
            <span className="sr-only">Error</span>404
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay={200}
            className="text-2xl text-gray-800 font-semibold md:text-3xl"
          >
            Sorry, we couldn't find this page.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay={300}
            className="mt-4 mb-8 text-gray-600"
          >
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <div data-aos="fade-up" data-aos-delay={400}>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded bg-violet-500 text-white"
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