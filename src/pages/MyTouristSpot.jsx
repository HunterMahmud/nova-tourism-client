import React, { useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link, ScrollRestoration } from "react-router-dom";
import contextProvider from "./../components/contextProvider";
import { Tooltip } from "react-tooltip";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyTouristSpot = () => {
  const [mySpotData, setMySpotData] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const { user} = contextProvider();
  const [loading, setLoading ] = useState(true);
  

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://nova-tourism-server.vercel.app/mylist/${user.email}`)

      .then((res) => {
        // console.log(res.data);
        setMySpotData(res.data);
        setLoading(false);
      });
  }, [refetch]);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://nova-tourism-server.vercel.app/deleteSpot/${id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your data has been deleted.",
              icon: "success",
            });
            setRefetch(!refetch);
          }
        });
      }
    });
  };
  if(loading) {return <div className="w-full min-h-[calc(100vh-349px)] bg-white dark:bg-gray-800 flex items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div>;}
  if (mySpotData.length == 0) {
    return (
      <div className="flex bg-gray-100 dark:bg-gray-800 items-center justify-center h-[calc(100vh-300px)]">
        <h1 className="font-bugrasimo text-2xl text-black dark:text-gray-100">Not found any data</h1>
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>My Tourist Spot | Nova Travel</title>
      </Helmet>
      <ScrollRestoration />
      <div className=" max-w-7xl p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800">
        <h1
          data-aos="fade-down"
          className="text-3xl lg:text-5xl font-bold  text-center mt-7 my-3 text-gray-900 dark:text-gray-100 font-bugrasimo"
        >
          Your Tourist Spot
        </h1>
        <p className="text-center text-gray-800 dark:text-gray-200">All your tourist spot here.</p>

        <div className="overflow-x-auto mt-7">
          <table className="text-xs mx-auto">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-700  bg-gray-300 text-gray-800 dark:text-gray-200">
              <tr className="text-left">
                <th className="p-3">Serial</th>
                <th className="p-3">Spot Name</th>
                <th className="p-3">Location</th>
                <th className="p-3">Country</th>
                <th className="p-3">Average Cost</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 dark:text-gray-200">
              {mySpotData.map((data, index) => (
                <tr
                  key={data._id}
                  className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 dark:bg-gray-900 bg-gray-50 font-bold"
                >
                  <td className="p-3">
                    <p>{index + 1}</p>
                  </td>
                  <td className="p-3 capitalize">
                    <p>{data?.spotName}</p>
                  </td>
                  <td className="p-3 capitalize">
                    <p>{data?.location}</p>
                  </td>
                  <td className="p-3 capitalize">
                    <p>{data?.countryName}</p>
                  </td>
                  <td className="p-3">
                    <p>{data?.averageCost} $</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="space-x-1">
                      <button
                      data-tooltip-id="delete-tooltip"
                      data-tooltip-content="Delete?"
                      data-tooltip-place="top"
                        onClick={() => handleDelete(data._id)}
                        className="p-2 text-base bg-red-400 rounded-sm"
                      >
                        <MdDeleteForever
                          
                        />{" "}
                        <Tooltip
                          style={{
                            backgroundColor: "rgb(248, 110, 110)",
                            color: "#fff",
                          }}
                          id="delete-tooltip"
                        />
                      </button>
                      <Link to={`/update/${data._id}`}>
                        <button
                        data-tooltip-id="edit-tooltip"
                        data-tooltip-content="Edit?"
                        data-tooltip-place="top"
                         className="p-2 text-base bg-green-400 rounded-sm">
                          <FaEdit />
                          <Tooltip
                          style={{
                            backgroundColor: "rgb(74, 222, 128)",
                            color: "#fff",
                          }}
                          id="edit-tooltip"
                        />
                        </button>
                      </Link>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTouristSpot;
