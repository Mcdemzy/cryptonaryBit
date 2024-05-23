import React from "react";
import { LuHome } from "react-icons/lu";
import { BiWallet } from "react-icons/bi";
import { FaRegChartBar } from "react-icons/fa";
import { SiBetterstack } from "react-icons/si";
import { PiPaperPlaneTilt } from "react-icons/pi";

import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar__container flex justify-et items-center">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active__nav" : "")}
      >
        <div className="flex flex-col justify-center items-center">
          <LuHome className="nav__icon" />
          <span>Home</span>
        </div>
      </NavLink>
      <NavLink
        to="/wallet"
        className={({ isActive }) => (isActive ? "active__nav" : "")}
      >
        <div className="flex flex-col justify-center items-center">
          <BiWallet className="nav__icon" />
          <span>Wallet</span>
        </div>
      </NavLink>
      <NavLink
        to="/etf"
        className={({ isActive }) => (isActive ? "active__nav" : "")}
      >
        <div className="flex flex-col justify-center items-center">
          <FaRegChartBar className="nav__icon" />
          <span>ETF</span>
        </div>
      </NavLink>
      <NavLink
        to="/coming"
        className={({ isActive }) => (isActive ? "active__nav" : "")}
      >
        <div className="flex flex-col justify-center items-center">
          <PiPaperPlaneTilt className="nav__icon" />
          <span>Payments</span>
        </div>
      </NavLink>
      <NavLink
        to="/coming"
        className={({ isActive }) => (isActive ? "active__nav" : "")}
      >
        <div className="flex flex-col justify-center items-center">
          <SiBetterstack className="nav__icon" />
          <span>Stake</span>
        </div>
      </NavLink>
    </section>
  );
};

export default Navbar;
