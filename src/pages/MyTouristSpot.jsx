import React, { useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import contextProvider from "./../components/contextProvider";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const MyTouristSpot = () => {
  const { user } = contextProvider();
  const [mySpotData, setMySpotData] = useState([]);
  const [refetch, setRefetch] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/mylist/${user.email}`)

      .then((res) => {
        // console.log(res.data);
        setMySpotData(res.data);
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
        axios.delete(`http://localhost:5000/deleteSpot/${id}`).then((res) => {
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
  return (
    <div>
      
      <div className=" max-w-7xl p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800">
      <h1
        data-aos="fade-down"
        className="text-3xl lg:text-5xl font-bold font-poppins text-center mt-7 my-3 text-gray-900"
      >
        Your Tourist Spot
      </h1>
      <p className="text-center">All your tourist spot here.</p>
      
        <div className="overflow-x-auto mt-7">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gray-700 dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Serial</th>
                <th className="p-3">Spot Name</th>
                <th className="p-3">Location</th>
                <th className="p-3">Country</th>
                <th className="p-3">Average Cost</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {mySpotData.map((data, index) => (
                <tr
                  key={data._id}
                  className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 font-bold"
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
                        onClick={() => handleDelete(data._id)}
                        className="p-2 text-base bg-red-400 rounded-sm"
                      >
                        <MdDeleteForever />{" "}
                      </button>
                      <Link to={`/update/${data._id}`}>
                        <button className="p-2 text-base bg-green-400 rounded-sm">
                          <FaEdit />
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
