import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-20">
      <div className="flex flex-wrap items-center justify-between px-4 md:px-14 p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo.png" className="h-10 w-10" alt="NexRide Logo" />
          <span className="text-2xl font-semibold dark:text-white">
            NexRide
          </span>
        </NavLink>

        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8`}
          id="navbar"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 dark:border-black rounded-lg bg-white  dark:bg-gray-900  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-1 px-3 rounded text-xl ${
                    isActive
                      ? "text-blue-500 dark:text-[#78b5ff]"
                      : "text-gray-900 dark:text-white"
                  } hover:text-blue-600  md:hover:bg-transparent md:border-0  md:p-0`
                }
                aria-current="page"
              >
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-1 px-3 rounded text-xl ${
                    isActive
                      ? "text-blue-500 dark:text-[#78b5ff]"
                      : "text-gray-900 dark:text-white"
                  } hover:text-blue-600  md:hover:bg-transparent md:border-0  md:p-0`
                }
                aria-current="page"
              >
                ABOUT
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/rideGuide"
                className={({ isActive }) =>
                  `block py-1 px-3 rounded text-xl ${
                    isActive
                      ? "text-blue-500 dark:text-[#78b5ff]"
                      : "text-gray-900 dark:text-white"
                  } hover:text-blue-600  md:hover:bg-transparent md:border-0  md:p-0`
                }
                aria-current="page"
              >
                RideGuide
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/track"
                className={({ isActive }) =>
                  `block py-1 px-3 rounded text-xl ${
                    isActive
                      ? "text-blue-500 dark:text-[#78b5ff]"
                      : "text-gray-900 dark:text-white"
                  } hover:text-blue-600  md:hover:bg-transparent md:border-0  md:p-0`
                }
                aria-current="page"
              >
                Track
              </NavLink>
            </li>
          </ul>

          {userInfo ? (
            <div className="relative group">
              <FaUserCircle className="text-3xl text-gray-900 dark:text-white cursor-pointer" />
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                <div className="px-4 py-2 text-gray-900 dark:text-white">
                  {userInfo.name}
                </div>
                <NavLink
                  to="/profile"
                  className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Profile
                </NavLink>
                <button
                  onClick={logoutHandler}
                  className="block w-full px-4 py-2 text-gray-900 dark:text-white text-left hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex space-x-4">
              <NavLink
                to="/login"
                className="flex items-center px-4 py-2 text-xl text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                <FaSignInAlt className="mr-2" /> Sign In
              </NavLink>
              <NavLink
                to="/register"
                className="flex items-center px-4 py-2 text-xl text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                <FaSignOutAlt className="mr-2" /> Sign Up
              </NavLink>
            </div>
          )}
        </div>
        <div className="hidden md:block">
          <ThemeBtn />
        </div>
      </div>
    </nav>
  );
};

export default Header;
