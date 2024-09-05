import React from "react";
import { NavLink, Link } from "react-router-dom";

function FeatureCard() {
  return (
    <>
      <div className="md:px-16 flex flex-col px-8 gap-10 pb-11 dark:bg-gray-900">
        <div className="md:flex bg-gray-200 p-3 m-4 rounded-2xl border-black border-r-2 border-b-2 md:bg-white  dark:md:bg-gray-900 md:border-none ">
          <div className="flex-1 grid place-content-center">
            <img src="/track.webp" className="h-36 md:h-72 rounded-3xl my-3" />
          </div>

          <div className="flex-1 grid text-center md:text-left place-content-center md:px-16 gap-3">
            <h1 className="text-blue-600 font-bold text-4xl dark:text-white dark:md:text-blue-400">
              Track your order
            </h1>
            <h3 className="text-black md:text-xl font-semibold dark:text-gray-100">
              Track your order status by simply entering your Order ID.
            </h3>
            <p className="text-gray-600 text-sm md:text-base dark:text-gray-300">
              Keep tabs on your order with ease. Just enter your Order ID to
              instantly check the current status and delivery progress of your
              purchase. Get real-time updates and know exactly where your order
              is at any moment.
            </p>
            <Link to="/">
              <button className="bg-blue-500 mt-6 font-semibold px-3 text-sm md:text-base p-1 md:px-5 border-black border-b-2 md:border-b-4 rounded-lg hover:text-white hover:shadow-sm hover:bg-blue-700">
                GO
              </button>
            </Link>
          </div>
        </div>

        <div className="md:flex bg-gray-200 p-3 m-4 rounded-2xl border-black border-r-2 border-b-2 md:bg-white  dark:md:bg-gray-900 md:border-none ">
          <div className="flex-1 grid text-center md:text-left place-content-center md:px-16 gap-3">
            <h1 className="text-blue-600 font-bold text-4xl dark:text-white dark:md:text-blue-400">
              RideGuide
            </h1>
            <h3 className="text-black md:text-xl font-semibold dark:text-gray-100">
              Find and filter electric vehicles based on your budget and range
              requirements with RideGuide
            </h3>
            <p className="text-gray-600 text-sm md:text-base dark:text-gray-300">
              Discover the perfect electric vehicle tailored to your needs. Use
              RideGuide to search and filter options according to your budget
              and desired range. Get personalized recommendations to make an
              informed choice and find the ideal EV for your lifestyle
            </p>
            <Link to="/rideGuide">
              <button className="bg-blue-500 mt-6 font-semibold px-3 text-sm md:text-base p-1 md:px-5 border-black border-b-2 md:border-b-4 rounded-lg hover:text-white hover:shadow-sm hover:bg-blue-700">
                Find
              </button>
            </Link>
          </div>

          <div className="flex-1 grid place-content-center">
            <img src="/scooty.png" className="h-36 md:h-72 rounded-3xl my-3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureCard;
