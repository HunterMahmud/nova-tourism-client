import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  FaVectorSquare,
  FaBed,
  FaCircleDollarToSlot,
  FaBath,
} from "react-icons/fa6";
const SpotCard = ({ spot }) => {
  //   console.log(spot);
  const {
    _id,
    averageCost,
    countryName,
    description,
    displayName,
    email,
    location,
    photoURL,
    seasionality,
    spotName,
    totalVisitor,
    travelTime,
  } = spot;
  return (
    <div data-aos="fade-up" className="mx-2">
      <div className="flex flex-col max-w-sm mx-auto space-y-6 overflow-hidden rounded-md border border-gray-100/25 hover:shadow-[20px,20px,20px,5px,rgba(255,255,255,0.01)] shadow-xl bg-main text-black">
        <div>
          {/* image container starts */}
          <div className="overflow-hidden relative w-full h-60">
            <img
              src={photoURL}
              alt={spotName}
              className="object-cover w-full h-60 transition-transform  duration-1000 transform hover:scale-125 bg-white"
            />
          </div>
       
          <div className="flex flex-col p-4">
            <div className="flex justify-between text-sm mb-3 gap-2 items-center flex-wrap">
              <div className="flex gap-2 items-center">
                <IoLocation />
                <p>{location}</p>
              </div>
              <div>
                <p className="bg-green-600 text-white px-2 p-1 rounded-md font-bold uppercase font-poppins">
                 
                  {countryName}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="mb-1 text-xl font-semibold">{spotName}</h2>
              
            </div>
            <div className="flex flex-wrap justify-between mt-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center space-x-3">
                  <span>Travel Time: {travelTime} days</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>Total Visitor: {totalVisitor}/Year</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center space-x-3">
                  <span>
                    Average Cost: {averageCost}$
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>Season: {seasionality}</span>
                </div>
              </div>
            </div>
            <div className="mt-3 w-full">
              <Link
                to={`/allspot/${_id}`}
                className="btn w-full text-white btn-primary bg-violet-500"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;
