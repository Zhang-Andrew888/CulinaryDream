import React from "react";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-10 shadow-sm">
      <div className="flex items-center gap-3">
        <img src={logo} alt="icon" className="w-8 h-8" />
        <span className="font-semibold text-5xl">Culinary Dream</span>
      </div>
      <nav className="flex gap-6 text-4xl">
        <Link to={"/browse"} className="hover:text-black transition-colors">
          Home
        </Link>
        <Link to={"/"} className="hover:text-black transition-colors">
          About
        </Link>
        <Link to={"/"} className="hover:text-black transition-colors">
          Signup/Login
        </Link>
      </nav>
    </header>
  );
};
