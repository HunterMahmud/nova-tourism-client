import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SpotCard from '../components/SpotCard';

const AllTouristSpot = () => {
    const spotInfo = useLoaderData();
    // console.log(data);
    return (
        <div>
            {
                spotInfo.map(spot=> <SpotCard key={spot._id} spot={spot}/>)
            }
           
        </div>
    );
};

export default AllTouristSpot;