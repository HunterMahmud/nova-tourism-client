import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import { ScrollRestoration } from "react-router-dom";

const SpotDetails = () => {
  const spot = useLoaderData();
  const {
    _id,
    averageCost,
    countryName,
    description,
    displayName,
    email,
    location,
    photoURL,
    seasonality,
    spotName,
    totalVisitor,
    travelTime,
  } = spot;

  return (
    <div>
      <Helmet>
        <title>{spotName} | Nova Travel</title>
      </Helmet>

      <ScrollRestoration />
      <div className="flex flex-col items-center justify-center h-[150px] sm:h-[300px] object-cover bg-cover bg-[linear-gradient(45deg,rgba(0,0,0,0.5),rgba(0,0,0,0)),url('https://source.unsplash.com/brown-wooden-boat-moving-towards-the-mountain-O453M2Liufs')] bg-center bg-no-repeat">
        <h2
          data-aos="fade-down"
          className="text-2xl sm:text-3xl lg:text-5xl font-poppins text-white capitalize"
        >
          {spotName}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay={100}
          className="text-sm mt-2 text-center text-white"
        >
          Details Page
        </p>
      </div>

      <div className="mx-3 mb-40">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-up" className=" gap-5 mt-10 ">
            <div className="title-and-text">
              <h1 className="text-3xl text-black font-bold font-poppins capitalize">
                {spotName}
              </h1>

              <p className="flex items-center text-gray-600 text-sm gap-2 my-2">
                <span>
                  {" "}
                  <FaLocationDot />{" "}
                </span>
                <span className="capitalize">
                  {location} | {countryName}
                </span>
              </p>
            </div>
            <div className="w-full relative">
              {" "}
              <img
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] image-full"
                src={photoURL}
                alt={spotName}
              />
            </div>
          </div>

          <div className="">
            <h3
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-2xl text-black font-bold  mt-10 uppercase font-poppins"
            >
              Descriptions {"&"} Details
            </h3>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="py-2 font-poppins text-gray-800"
            >
              {description}
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className=" text-gray-800 rounded-md mt-5 w-full font-bold font-poppins"
          >
            <div className="overflow-x-auto max-w-[600px]">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Spot ID</td>
                    <td>{_id}</td>
                  </tr>

                  <tr>
                    <td>Country Name</td>
                    <td className="capitalize">{countryName}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td className="capitalize">{location}</td>
                  </tr>
                  <tr>
                    <td>Spot Name</td>
                    <td className="capitalize">{spotName}</td>
                  </tr>
                  <tr>
                    <td>Seasonality</td>
                    <td className="capitalize">{seasonality}</td>
                  </tr>

                  <tr>
                    <td>Average Cost</td>
                    <td>{averageCost}$ /Person</td>
                  </tr>
                  <tr>
                    <td>Travel Time</td>
                    <td className="capitalize">{travelTime} days</td>
                  </tr>
                  <tr>
                    <td>Total Visitors</td>
                    <td className="capitalize">{totalVisitor} /year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className=" my-5">
            <h1 data-aos="fade-up"
              data-aos-delay="200"
              className="text-2xl text-black font-bold  mt-10 uppercase font-poppins">Contact info</h1>
            <div data-aos="fade-up"
              data-aos-delay="200"
              className="text-base text-black font-bold  mt-10 font-poppins">
              <p>Name: {displayName}</p>
              <a href={`mailto:${email}`}> Email: {email}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;

