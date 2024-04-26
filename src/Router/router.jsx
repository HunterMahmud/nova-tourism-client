

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
                loader: ()=> fetch('http://localhost:5000/allSpot')
            },
            {
                path:'/allspot/:id',
                element: <SpotDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/allSpot/${params.id}`),
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