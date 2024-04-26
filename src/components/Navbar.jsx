import { Link, NavLink } from "react-router-dom";
import contextProvider from "./contextProvider";
import { toast } from 'react-toastify';



const Navbar = () => {
  const { user, logOut } = contextProvider();
  
  const links = (
    <>
      <li>
        <NavLink className='text-lg' to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className='text-lg' to="/allspot">All Tourist Spot</NavLink>
      </li>
      
      {user && (
        <>
        <li>
          <NavLink className='text-lg' to="/addspot">Add Tourist Spot</NavLink>
        </li>
        <li>
          <NavLink className='text-lg' to="/mylist">My List</NavLink>
        </li>
        </>
        
      ) }
      <li>
        <NavLink className='text-lg' to="/aboutus">About Us</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Logged out.')

      })
      .catch((err) => {
        console.log(err);
        toast.error('Logout error happened.')
      });
  };

  return (
    <div className="text-black bg-card">
      <div className="navbar sm:w-[97%] sm:mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl md:text-2xl lg:text-3xl hover:bg-violet-500 font-bugrasimo hover:text-white  text-black -ml-3 md:ml-3 px-1 md:px-3">
          Nova Estate
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-3">
          {user ? (
            <>
              <img
                alt={user?.displayName ? user.displayName : 'Name not found'}
                title={user?.displayName ? user.displayName : 'Name not set'}
                className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
                src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/tJTV83n/user-image-not-found.jpg'}
              />
              <button onClick={handleLogOut} className="btn btn-secondary bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-[#f04970] sm:text-lg text-white">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary bg-violet-700 text-xl text-white font-poppins">Login</button>
            </Link>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;