import { Navigate, useLocation } from "react-router-dom";
import contextProvider from "./contextProvider";

const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = contextProvider();
    if(loading) {return <div className="w-full min-h-[calc(100vh-349px)] flex items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div>;}
    if(user)  {
       return children;
    } 
    return <Navigate to='/login' state={location.pathname}/>
};

export default ProtectedRoute;