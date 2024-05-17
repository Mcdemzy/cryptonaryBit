// import React from "react";

import { LuHome } from "react-icons/lu";
import { BiWallet } from "react-icons/bi";
import { FaRegChartBar } from "react-icons/fa";
import { PiNewspaperClippingThin } from "react-icons/pi";
import { PiPaperPlaneTilt } from "react-icons/pi";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <section className="navbar__container flex justify-around items-center">
        <a href="" className="active__nav">
          <div className="flex flex-col justify-center items-center">
            <LuHome className="nav__icon" />
            <span>Home</span>
          </div>
        </a>
        <a href="">
          <div className="flex flex-col justify-center items-center">
            <BiWallet className="nav__icon" />
            <span>Wallet</span>
          </div>
        </a>
        <a href="">
          <div className="flex flex-col justify-center items-center">
            <FaRegChartBar className="nav__icon" />
            Charts
          </div>
        </a>
        <a href="">
          <div className="flex flex-col justify-center items-center">
            <PiNewspaperClippingThin className="nav__icon" />
            <span>Transactions</span>
          </div>
        </a>
        <a href="">
          <div className="flex flex-col justify-center items-center">
            <PiPaperPlaneTilt className="nav__icon" />
            <span>Payments</span>
          </div>
        </a>
      </section>
    </>
  );
};

export default Navbar;
