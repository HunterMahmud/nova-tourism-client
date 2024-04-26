import React, { useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import contextProvider from "./../components/contextProvider";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

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
  
  const handleDelete = (id)=> {
    // console.log(id);
    axios.delete(`http://localhost:5000/deleteSpot/${id}`)
    .then(res=>{
        // console.log(res.data);
        if(res.data.deletedCount>0){
            toast.success('Delete Success')
            setRefetch(!refetch);
        }
    })
  }
  return (
    <div>
      <div className=" max-w-7xl p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Your List</h2>
        <div className="overflow-x-auto">
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
                  className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50"
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
                      onClick={()=> handleDelete(data._id)} className="p-2 text-base bg-red-400 rounded-sm">
                        <MdDeleteForever />{" "}
                      </button>
                      <Link to='/'>
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
