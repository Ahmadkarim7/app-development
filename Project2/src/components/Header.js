import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <nav className="grid grid-flow-col shadow-md items-center px-10 ">
      <div className="col-span-2">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="" className="size-28" />
          <div className="flex flex-col">
            <span className="text-3xl text-blue-400 leading-7 font-bold">
              Explore <br />
              Nature
            </span>
          </div>
        </Link>
      </div>
      <div className="col-span-10">
        <ul className="flex justify-around">
          <li className="text-2xl text-blue-400 font-bold hover:underline">
            <Link to="/stars-and-trees">Stars & Trees</Link>
          </li>
          <li className="text-2xl text-blue-400 font-bold hover:underline">
            <Link to="/walk-with-nature">Walk with Nature</Link>
          </li>
          <li className="text-2xl text-blue-400 font-bold hover:underline">
            <Link to="/beauty-of-nature">Beauty of Nature</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
