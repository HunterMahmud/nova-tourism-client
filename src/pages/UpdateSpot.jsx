import { useLoaderData } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ScrollRestoration } from "react-router-dom";
import axios from "axios";
const UpdateSpot = () => {
  const spotInfo = useLoaderData();
  // console.log(spotInfo);
  const {
    _id,
    averageCost,
    countryName,
    description,
    location,
    photoURL,
    seasonality,
    spotName,
    totalVisitor,
    travelTime,
  } = spotInfo;

  let defaultValues = {
    location,
    totalVisitor,
    description,
    averageCost,
    travelTime,
    seasonality,
    photoURL,
    countryName,
    spotName,
  };
  const {
    register,
    handleSubmit,
    formState: { isDirty, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      ...defaultValues,
    },
  });

  const onSubmitEdit = (updateInfo) => {
    console.log(updateInfo);
    axios
      .patch(`http://localhost:5000/update/${_id}`, updateInfo)
      .then((res) => {
        // console.log(res);
        if (res?.data?.modifiedCount > 0) {
          toast.success("Info updated successfully");
        }
      });
  };
  return (
    <div className="mx-2">
      <Helmet>
        <title>Update Tourist Spot | Nova Travel</title>
      </Helmet>
      <ScrollRestoration />
      <h1
        data-aos="fade-down"
        className="text-3xl lg:text-5xl font-bold font-poppins text-center mt-7 my-3 text-gray-900"
      >
        Update Tourist Spot
      </h1>
      <p className="text-center">Edit the data to update your tourist spot.</p>
      <div className="max-w-7xl mx-auto">
        <div>
          <section
            data-aos="fade-down"
            data-aos-delay={300}
            className="p-6 my-10 lg:col-span-3 rounded-md text-black bg-card"
          >
            <form
              onSubmit={handleSubmit(onSubmitEdit)}
              className="grid lg:grid-cols-2 lg:gap-3 mx-auto"
            >
              <div className="">
                <label htmlFor="spotName" className="text-sm">
                  Spot Name
                </label>
                <input
                  {...register("spotName")}
                  id="spotName"
                  type="text"
                  required={true}
                  placeholder="Ex: Koromjol"
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="cname" className="text-sm">
                  Country Name
                </label>
                <select
                  {...register("countryName")}
                  id="cname"
                  type="text"
                  required={true}
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                >
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Vietnam">Vietnam</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="location" className="text-sm">
                  Location
                </label>
                <input
                  {...register("location")}
                  id="location"
                  type="text"
                  required={true}
                  placeholder="Ex: Sundarban, Bagerhat, Khulna"
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="url" className="text-sm">
                  Photo URL
                </label>
                <input
                  {...register("photoURL")}
                  id="url"
                  type="url"
                  required={true}
                  placeholder="Ex: https://www.image.com/img.jpg"
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="season" className="text-sm">
                  Seasonality
                </label>
                <input
                  {...register("seasonality")}
                  id="season"
                  type="text"
                  required={true}
                  placeholder="Ex: Summar"
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="cost" className="text-sm">
                  Average Cost ($)
                </label>
                <input
                  {...register("averageCost")}
                  id="cost"
                  type="number"
                  required={true}
                  placeholder="Ex: 1000"
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="travel-time" className="text-sm">
                  Travel Time (in days)
                </label>
                <input
                  {...register("travelTime")}
                  id="travel-time"
                  type="number"
                  required={true}
                  placeholder="Ex: 7"
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="visitors" className="text-sm">
                  Total Visitors/Year
                </label>
                <input
                  {...register("totalVisitor")}
                  id="visitors"
                  type="number"
                  required={true}
                  placeholder="Ex: 10000"
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Short Description
                </label>
                <textarea
                  {...register("description")}
                  required={true}
                  id="bio"
                  placeholder="Your description here..."
                  className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                ></textarea>
              </div>

              <div className="flex justify-end py-4">
                <button
                  disabled={!isDirty}
                  className="p-2 px-4 rounded-md text-gray-100 bg-violet-500 disabled:bg-violet-300 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  Update
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UpdateSpot;
