

import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Root from './../Layouts/Root';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <NotFound></NotFound>,
        children:[
            {

            }
        ]
        
    }
])

export default router;