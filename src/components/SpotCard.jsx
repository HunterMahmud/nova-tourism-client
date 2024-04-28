import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
  //   console.log(spot);
  const {
    _id,
    averageCost,
    countryName,
    location,
    photoURL,
    seasonality,
    spotName,
    totalVisitor,
    travelTime,
  } = spot;
  // if(!_id) console.log(spotName);
  return (
    <div data-aos="fade-up" className="mx-2">
      <div className="flex flex-col max-w-sm mx-auto space-y-6 overflow-hidden rounded-md border border-gray-100/25 hover:shadow-[20px,20px,20px,5px,rgba(255,255,255,0.01)] shadow-xl bg-main dark:bg-gray-600 text-black">
        <div>
          {/* image container starts */}
          <div className="overflow-hidden relative w-full h-60">
            <img
              src={photoURL}
              alt={spotName}
              className="object-cover w-full h-60 transition-transform  duration-1000 transform hover:scale-125 bg-white dark:bg-gray-600"
            />
          </div>

          <div className="flex dark:text-gray-100 flex-col p-4">
            <div className=" text-sm mb-3 gap-2 items-center flex-wrap">
              <div className="flex gap-2 items-center capitalize">
                <IoLocation />
                <p>{location}</p>
              </div>
              
            </div>
            <div className="flex flex-col">
              <h2 className="mb-1 text-xl font-semibold capitalize font-bugrasimo">
                {spotName}
              </h2>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <div className="flex justify-between">
                <p>Travel Time:</p>
                <p> {travelTime} days</p>
              </div>
              <div className="flex justify-between">
                <p>Total Visitor:</p>
                <p> {totalVisitor}/Year</p>
              </div>
              <div className="flex justify-between">
                <p> Average Cost: </p>
                <p>{averageCost}$</p>
              </div>
              <div className="flex justify-between">
                <p>Seasonality: </p>
                <p> {seasonality}</p>
              </div>
            </div>
            <div className="mt-3 w-full">
              <Link
                to={`/allspot/${_id}`}
                className="btn w-full font-bugrasimo text-white btn-primary bg-violet-500"
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
