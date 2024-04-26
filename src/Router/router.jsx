

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
                path: '/addspot',
                element: <ProtectedRoute><AddTouristSpot/></ProtectedRoute>,
            },
            {
                path: '/mylist',
                element: <MyTouristSpot/>,
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