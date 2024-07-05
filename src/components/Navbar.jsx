import React from "react";
import logo from "../assets/logo.png";
import brand from "../assets/brand.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-around">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-9 h-9" />
          <img src={brand} alt="brand" className="w-[50%] h-[50%]" />
        </div>
        <div className="flex gap-7 items-center">
        <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#FFAA00] font-bold" : "text-black"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? "text-[#FFAA00] font-bold" : "text-black"
            }
          >
            Categories
          </NavLink>

          <p>About us</p>
          <p>Products</p>
          <p>Pet Care</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-4 items-center">
          <button className="bg-[#124C5F] w-[65px] h-[25px] text-xs rounded text-white">
            Sign In
          </button>
          <button className="bg-[#C7E7E1] w-[65px] h-[25px] text-xs rounded text-black">
            Register
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
