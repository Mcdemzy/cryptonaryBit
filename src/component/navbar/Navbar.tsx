import { BiWallet } from "react-icons/bi";
import { FaRegChartBar } from "react-icons/fa";
import { SiBetterstack } from "react-icons/si";
import { SiApplenews } from "react-icons/si";
import { FaMoneyBillTransfer } from "react-icons/fa6";

import "./navbar.css";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  return (
    <section className="navbar__container flex justify-et items-center">
      {/* <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active__nav" : "")}
      >
        <div className="flex flex-col justify-center items-center">
          <LuHome className="nav__icon" />
          <span>Home</span>
        </div>
      </NavLink> */}
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active__nav" : "")}
      >
        <div className="flex flex-col justify-center items-center">
          <MdDashboard className="nav__icon" />
          <span>Dashboard</span>
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
        to="/transactions"
        className={({ isActive }) => (isActive ? "active__nav" : "")}
      >
        <div className="flex flex-col justify-center items-center">
          <FaMoneyBillTransfer className="nav__icon" />
          <span>Transaction</span>
        </div>
      </NavLink>{" "}
      <NavLink
        to="/news"
        className={({ isActive }) => (isActive ? "active__nav" : "")}
      >
        <div className="flex flex-col justify-center items-center">
          <SiApplenews className="nav__icon" />
          <span>News</span>
        </div>
      </NavLink>
    </section>
  );
};

export default Navbar;
