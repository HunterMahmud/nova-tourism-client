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
    // console.log(updateInfo);
    const info = {...updateInfo,
      averageCost : parseInt(updateInfo.averageCost),
      travelTime: parseInt(updateInfo.travelTime),
      totalVisitor: parseInt(updateInfo.totalVisitor),
    };
    console.log(info);
    axios
      .patch(`https://nova-tourism-server.vercel.app/update/${_id}`, info)
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
        className="text-3xl lg:text-5xl font-bold font-bugrasimo text-center mt-7 my-3 dark:text-gray-100 text-gray-900"
      >
        Update Tourist Spot
      </h1>
      <p className="text-center text-gray-800 dark:text-gray-200">Edit the data to update your tourist spot.</p>
      <div className="max-w-7xl mx-auto">
        <div>
          <section
            data-aos="fade-down"
            data-aos-delay={300}
            className="p-6 my-10 lg:col-span-3 rounded-md text-black dark:bg-gray-600 bg-card"
          >
            <form
              onSubmit={handleSubmit(onSubmitEdit)}
              className="grid lg:grid-cols-2 lg:gap-3 mx-auto"
            >
              <div className="">
                <label htmlFor="spotName" className="text-sm text-gray-800 dark:text-gray-200">
                  Spot Name
                </label>
                <input
                  {...register("spotName")}
                  id="spotName"
                  type="text"
                  required={true}
                  placeholder="Ex: Koromjol"
                  className="w-full rounded-md dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="cname" className="text-sm text-gray-800 dark:text-gray-200">
                  Country Name
                </label>
                <select
                  {...register("countryName")}
                  id="cname"
                  type="text"
                  required={true}
                  className="w-full rounded-md dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
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
                <label htmlFor="location" className="text-sm text-gray-800 dark:text-gray-200">
                  Location
                </label>
                <input
                  {...register("location")}
                  id="location"
                  type="text"
                  required={true}
                  placeholder="Ex: Sundarban, Bagerhat, Khulna"
                  className="w-full rounded-md dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="url" className="text-sm text-gray-800 dark:text-gray-200">
                  Photo URL
                </label>
                <input
                  {...register("photoURL")}
                  id="url"
                  type="url"
                  required={true}
                  placeholder="Ex: https://www.image.com/img.jpg"
                  className="w-full rounded-md dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="season" className="text-sm text-gray-800 dark:text-gray-200">
                  Seasonality
                </label>
                <input
                  {...register("seasonality")}
                  id="season"
                  type="text"
                  required={true}
                  placeholder="Ex: Summar"
                  className="w-full rounded-md dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="cost" className="text-sm text-gray-800 dark:text-gray-200">
                  Average Cost ($)
                </label>
                <input
                  {...register("averageCost")}
                  id="cost"
                  type="number"
                  required={true}
                  placeholder="Ex: 1000"
                  className="w-full rounded-md dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="travel-time" className="text-sm text-gray-800 dark:text-gray-200">
                  Travel Time (in days)
                </label>
                <input
                  {...register("travelTime")}
                  id="travel-time"
                  type="number"
                  required={true}
                  placeholder="Ex: 7"
                  className="w-full rounded-md dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="">
                <label htmlFor="visitors" className="text-sm text-gray-800 dark:text-gray-200">
                  Total Visitors/Year
                </label>
                <input
                  {...register("totalVisitor")}
                  id="visitors"
                  type="number"
                  required={true}
                  placeholder="Ex: 10000"
                  className="w-full rounded-md dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm text-gray-800 dark:text-gray-200">
                  Short Description
                </label>
                <textarea
                  {...register("description")}
                  required={true}
                  id="bio"
                  placeholder="Your description here..."
                  className="w-full rounded-md dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                ></textarea>
              </div>

              <div className="flex justify-end py-4">
                <button
                  disabled={!isDirty}
                  className="p-2 px-4 rounded-md text-gray-100 bg-violet-500 disabled:bg-violet-300 disabled:text-gray-400 disabled:cursor-not-allowed font-bugrasimo"
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
