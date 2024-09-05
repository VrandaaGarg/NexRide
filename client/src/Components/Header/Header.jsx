import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 z-20">
      <div className=" flex flex-wrap items-center justify-between px-4 md:px-14 z-30  p-4 fixed w-lvw bg-white dark:bg-gray-900">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo.png" className="h-10 w-10" alt="" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NexRide
          </span>
        </NavLink>
        <div className="flex ">
          <div className="grid place-content-center md:hidden">
            <ThemeBtn />
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
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
          } absolute top-full left-0 w-full bg-white dark:bg-gray-900 z-10 md:block md:static md:w-auto md:z-auto md:bg-transparent`}
          id="navbar-default"
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
        </div>
        <div className="hidden md:block">
          <ThemeBtn />
        </div>
      </div>
    </nav>
  );
}

export default Header;
