import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";



const CountryCard = () => {


  //took all added data and make them in a country wise array then add desc and put in the database
  // don't uncomment this 

  // useEffect(() => {
  //   axios.get("http://localhost:5000/allSpotCountry").then((res) => {
  //     //console.log(JSON.stringify(res.data));
  //     // setSpotInfo(res.data);
  //     // console.log(res.data);
  //     let newCountry = res.data;
  //     // console.log(newCountry);
  //     for (let x = 0; x < 6; x++) {
  //       newCountry[x].desc = ct1[newCountry[x]._id];
  //     }
  //     console.log(newCountry);
  //     axios.post('http://localhost:5000/countries/data',newCountry )
  //     .then(res=> {
  //       console.log(res.data);
  //     })
  //   });
  // }, []);
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
        <Link
          to="/"
          className="flex flex-col items-center justify-center text-white object-cover transition-transform  duration-1000 transform hover:scale-105 bg-white overflow-hidden bg-[url('https://www.nationalgeographic.com/news-features/son-doong-cave/2/img/son-doong-cave-opengraph-c.jpg')] relative w-full h-[400px]"
        >
          <h1 className="text-2xl">{"Bangladesh"}</h1>
          <p className="text-sm w-[90%] text-center">
            {
              "short desc amr sonar bangla ami tomai valo bahsi keno jani na valoi lage amake ato keno cvalo lage ami jan ikeno  kenfd ami bolbo na tomeder k ami bolbo na"
            }
          </p>
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
        const ct1 = {
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
