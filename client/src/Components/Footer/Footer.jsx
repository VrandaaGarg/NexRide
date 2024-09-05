import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <img src="/nexRide.png" alt="" className="h-10" />
        </div>
      </div>
      <div className="">
        <h1>INDIA</h1>
        <h1>nexride@gmail.com</h1>
        <h1>+91 9802673928</h1>
        <h1>Sector 31,Rajnagar Extension,New Delhi</h1>
      </div>
      <div className="">
        <div className="">
          <NavLink to="">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/rideGuide">RideGuide</NavLink>
          <NavLink to="/track">Track</NavLink>
        </div>
        <div className="">
          <NavLink to="">Team</NavLink>
          <NavLink to="">Help</NavLink>
          <NavLink to="">Feedback</NavLink>
        </div>
      </div>
      <div className="">
        <h1>Get Help !</h1>
        <NavLink to="">FAQs</NavLink>
        <NavLink to="">Contact</NavLink>
      </div>
    </div>
  );
}

export default Footer;
