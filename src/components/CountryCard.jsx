import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const CountryCard = ({ country }) => {
  // console.log(country.photo);
  const photo = `bg-[linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url('${country.photo}')]`
  console.log(photo);
  // console.log(spot);

  //   const {
  //     _id,
  //     averageCost,
  //     countryName,
  //     location,
  //     photoURL,
  //     seasonality,
  //     spotName,
  //     totalVisitor,
  //     travelTime,
  //   } = spot;
  // if(!_id) console.log(spotName);
  return (
    <div data-aos="fade-up" className="mx-2">
      <div className="flex flex-col max-w-lg mx-auto space-y-6 overflow-hidden rounded-md border border-gray-100/25 hover:shadow-[20px,20px,20px,5px,rgba(255,250,255,0.01)] shadow-xl bg-main text-black">
        {/* start  */}
        <img src={country.photo} alt="" />
        <Link
          to={`/${country._id}`}
          className={`flex flex-col gap-3 items-center justify-center text-white bg-center bg-no-repeat bg-cover object-cover transition-transform  duration-1000 transform hover:scale-105 bg-white overflow-hidden ${photo} relative w-full h-[400px]`}
        >
          <h1 className="text-2xl font-bugrasimo">{country._id}</h1>
          <p className="text-sm font-poppins w-[90%] text-center">{country.desc}</p>
        </Link>
        {/* ends here */}
      </div>
    </div>
  );
};

export default CountryCard;

/*
 <img
              src={'https://www.nationalgeographic.com/news-features/son-doong-cave/2/img/son-doong-cave-opengraph-c.jpg'}
              alt={"spotName"}
              className="object-cover w-full h-60 transition-transform  duration-1000 transform hover:scale-125 bg-white"
            />

<Link to='/' className="flex flex-col items-center justify-center text-white  hover:bg-opacity-60 bg-white overflow-hidden bg-[url('https://www.nationalgeographic.com/news-features/son-doong-cave/2/img/son-doong-cave-opengraph-c.jpg')] relative w-full h-60">
             
             <h1 className="text-lg">Bangladesh</h1>
             <p>Bangladesh is very beautiful country.</p>
            
        </Link>

            /// another div of img

             <div className="flex items-center justify-center text-white object-cover transition-transform  duration-1000 transform hover:scale-125 bg-white overflow-hidden bg-[url('https://www.nationalgeographic.com/news-features/son-doong-cave/2/img/son-doong-cave-opengraph-c.jpg')] relative w-full h-60">
             <div>
             <h1>hello</h1>
             <p>short desc</p>
             </div>
        </div>

        // this is the desc i added to the database
      

const ct = {
  Bangladesh:
    "Explore Sundarbans' mangrove forests, Cox's Bazar's sandy beaches, and Srimangal's lush tea gardens.",
  Thailand:
    "Discover Bangkok's Grand Palace, Phi Phi Islands' pristine beaches, and Chiang Mai's vibrant night bazaar.",
  Indonesia:
    "Encounter Borobudur's ancient temple, Bali's cultural charm, and Komodo's legendary dragons.",
  Malaysia:
    "Experience Kuala Lumpur's Petronas Towers, Langkawi's scenic beauty, and Taman Negara's rainforest adventures.",
  Vietnam:
    "Cruise Ha Long Bay's limestone karsts, wander Hoi An's ancient streets, and explore the Mekong Delta's waterways.",
  Cambodia:
    "Witness Angkor Wat's majestic temples, shop at Siem Reap's night market, and relax on Sihanoukville's beaches.",
};
*/
