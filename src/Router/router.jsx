

import { createBrowserRouter } from 'react-router-dom';
import AllTouristSpot from '../pages/AllTouristSpot';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Root from './../Layouts/Root';
import Register from './../pages/Register';
import AddTouristSpot from './../pages/AddTouristSpot';
import MyTouristSpot from '../pages/MyTouristSpot';
import ProtectedRoute from '../components/ProtectedRoute';
import SpotDetails from '../pages/SpotDetails';
import AboutUs from '../pages/AboutUs';
import UpdateSpot from './../pages/UpdateSpot';
import Country from '../pages/Country';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <NotFound/>,
        children:[
            {
                path:'/',
                element: <Home/>,
            },
            {
                path:'/allspot',
                element: <AllTouristSpot/>,
            },
            {
                path:'/allspot/:id',
                element: <ProtectedRoute><SpotDetails/></ProtectedRoute>,
                
            },
            {
                path: '/addspot',
                element: <ProtectedRoute><AddTouristSpot/></ProtectedRoute>,
            },
            {
                path: '/mylist',
                element:<ProtectedRoute> <MyTouristSpot/></ProtectedRoute>,
            
            },
            {
                path:'/:country',
                element: <Country/>,
                loader: ({params}) => fetch(`https://nova-tourism-server.vercel.app/country/${params.country}`),
            },
            {
                path: '/update/:id',
                element: <ProtectedRoute><UpdateSpot/></ProtectedRoute>,
                loader: ({params}) => fetch(`https://nova-tourism-server.vercel.app/allSpot/${params.id}`)
            },
            {
                path:'/aboutus',
                element: <AboutUs/>
            },
            {
                path:'/login',
                element: <Login/>,
            },
            {
                path:'/register',
                element: <Register/>,
            }
        ]
        
    }
])

export default router;