import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className='bg-white object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.1),rgba(3,7,18,0)),url("https://source.unsplash.com/white-concrete-wall-2_BZuGgkP4k")] bg-center bg-no-repeat bg-fixed'>
      <Navbar />
      <div className="min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
