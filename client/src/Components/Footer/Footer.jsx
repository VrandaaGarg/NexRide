import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-around px-9 gap-6 md:px-0 dark:text-gray-400 md:gap-0 dark:bg-gray-950 pb-10 bg-slate-100 pt-7">
      <div className="">
        <div className="">
          <img src="/nexRide.png" alt="" className="h-10" />
        </div>
      </div>
      <div className="flex flex-col">
        <h1>INDIA</h1>
        <h1>nexride@gmail.com</h1>
        <h1>+91 9802673928</h1>
        <h1>Sector 31,Rajnagar Extension,New Delhi</h1>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <NavLink to="">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/rideGuide">RideGuide</NavLink>
          <NavLink to="/track">Track</NavLink>
        </div>
        <div className="flex flex-col">
          <NavLink to="/team">Team</NavLink>
          <NavLink to="">Help</NavLink>
          <NavLink to="">Feedback</NavLink>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="mb-8">Get Help !</h1>
        <NavLink to="">FAQs</NavLink>
        <NavLink to="">Contact</NavLink>
      </div>
    </div>
  );
}

export default Footer;
