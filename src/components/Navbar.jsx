import { Link, NavLink } from "react-router-dom";
import contextProvider from "./contextProvider";
import { toast } from "react-toastify";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = contextProvider();
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
    document.querySelector("html").setAttribute("class", localTheme);
  }, [theme]);



  const links = (
    <>
      <li>
        <NavLink className="text-base sm:text-lg lg:text-sm" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-base sm:text-lg lg:text-sm" to="/allspot">
          All Tourist Spot
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink className="text-base sm:text-lg lg:text-sm" to="/addspot">
              Add Tourist Spot
            </NavLink>
          </li>
          <li>
            <NavLink className="text-base sm:text-lg lg:text-sm" to="/mylist">
              My List
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink className="text-base sm:text-lg lg:text-sm" to="/aboutus">
          About Us
        </NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink className="text-base sm:text-lg lg:text-base" to="/register">
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out.");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Logout error happened.");
      });
  };

  return (
    <div className="text-black dark:text-white bg-card dark:bg-gray-500">
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
              className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow text-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 rounded-box w-52 font-bugrasimo"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl md:text-2xl lg:text-3xl hover:bg-violet-500 font-bugrasimo hover:text-white -ml-3 md:ml-3 px-1 md:px-3"
          >
            Nova Travel
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-bugrasimo px-1 space-x-3">{links}</ul>
        </div>

        <div className="navbar-end">
          <div className="flex items-center gap-3">
            <div className="text-black">
              <button className="text-2xl bg-gray-300 hover:bg-gray-400 p-2 rounded-full">
                {theme == "dark" ? (
                  <FiSun onClick={() => {
                    localStorage.setItem("theme", "light");
                    return setTheme("light")
                  }} />
                ) : (
                  <FiMoon onClick={() => {
                    localStorage.setItem("theme","dark");
                    return setTheme("dark")}} />
                )}
              </button>
            </div>
            {user ? (
              <>
                <img
                // style={{ display: window.innerWidth <= 541 ? 'block' : 'none' }}
                  alt={user?.displayName ? user.displayName : "Name not found"}
                  title={user?.displayName ? user.displayName : "Name not set"}
                  className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100 hidden sm:block"
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/tJTV83n/user-image-not-found.jpg"
                  }
                />
                <button
                  onClick={handleLogOut}
                  className="btn font-bugrasimo btn-secondary bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-[#f04970] sm:text-lg text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary bg-violet-700 text-xl text-white font-bugrasimo">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
