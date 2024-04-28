import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

const SpotCountryCard = ({ spot }) => {
  const {
    _id,
    averageCost,
    countryName,
    location,
    seasonality,
    spotName,
    description,
  } = spot;

  return (
    <div data-aos="fade-up" className="mx-2"> 
      <div className="flex flex-col h-full max-w-sm mx-auto space-y-6 overflow-hidden rounded-md border border-gray-100/25 hover:shadow-[20px,20px,20px,5px,rgba(255,255,255,0.01)] shadow-xl bg-main text-black ">
        <div className="flex flex-col justify-between  relative h-full p-4 ">
          <div>
          <div className="flex flex-col">
            <h2 className="mb-1 text-xl font-semibold capitalize">
              {spotName} | {countryName}
            </h2>
          </div>
          <div className=" text-sm mb-3 gap-2 items-center ">
            <div className="flex gap-2 items-center capitalize">
              <IoLocation />
              <p>{location}</p>
            </div>
          </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-poppins font-semibold">Description:</h3>
            <p className="text-sm">{description}</p>
          </div>
          <div className="flex flex-col gap-2 mt-5">
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
              className="btn w-full text-white btn-primary bg-violet-500"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotCountryCard;

/*

 
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">


<div class="container mx-auto p-6">
  <div class="flex items-stretch -mx-4">
    <div class="flex-1 p-4">
      <div class="block bg-white overflow-hidden border-2 h-full">
        <div class="p-4">
          <h2 class="mt-2 mb-2 font-bold text-2xl font-Headingg">
            Card Name
          </h2>
          <div class="mb-4 flex flex-wrap">
            <span class="mr-2">Link 1</span>
            <span>Link 2</span>
          </div>

          <p class="text-md text-justify">Some Description</p>
        </div>
        <div class="p-4 flex flex-wrap items-center">
          <p class="px-1 py-2 tracking-wide text-xs mr-2 mb-2">Tag #1</p>
          <p class="px-1 py-2 tracking-wide text-xs mr-2 mb-2">Tag #2</p>
        </div>
      </div>
    </div>
    
    <div class="flex-1 p-4">
      <div class="block bg-white overflow-hidden border-2 h-full">
        <div class="p-4">
          <h2 class="mt-2 mb-2 font-bold text-2xl font-Headingg">
            Card Name
          </h2>
          <div class="mb-4 flex flex-wrap">
            <span class="mr-2">Link 1</span>
            <span>Link 2</span>
          </div>

          <p class="text-md text-justify">Some Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim lectus.</p>
        </div>
        <div class="p-4 flex flex-wrap items-center">
          <p class="px-1 py-2 tracking-wide text-xs mr-2 mb-2">Tag #1</p>
          <p class="px-1 py-2 tracking-wide text-xs mr-2 mb-2">Tag #2</p>
        </div>
      </div>
    </div>
  </div>
</div>

*/
