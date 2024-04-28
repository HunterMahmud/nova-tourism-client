import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className='dark:bg-[linear-gradient(45deg,rgba(13,15,16,0.8),rgba(3,7,21,.7)),url("https://source.unsplash.com/white-concrete-wall-2_BZuGgkP4k")] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.1),rgba(3,7,18,0)),url("https://source.unsplash.com/white-concrete-wall-2_BZuGgkP4k")] bg-center bg-no-repeat bg-fixed'>
      <Navbar />
      <div className="min-h-[calc(100vh-300px)] mb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
