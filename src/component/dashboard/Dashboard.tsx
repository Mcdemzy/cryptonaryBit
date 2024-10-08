import "./dashboard.css";

import { AiOutlineSwap } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import Cup from "../../assets/cup.png";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import MarketChart from "../chart/MarketChart";
import Navbar from "../navbar/Navbar";
import AccountBalance from "./components/AccountBalance";
import Header from "../header/Header";
import IntercomComponent from "../intercom/Intercom";

const Dashboard = () => {
  return (
    <>
      <IntercomComponent />
      <section className="dashboard__container">
        <Header />

        <div className="flex items-center justify-center">
          <AccountBalance />
        </div>

        <div className="mt-6 dashboard__feature flex justify-around items-center w-[90vw] h-[16vh] m-auto bg-[#060d17] p-[10px] rounded-xl">
          <Link to="/buy">
            <div className="flex flex-col items-center">
              <div className="bg-[#151F2B] h-8 w-12 flex justify-center items-center text-[1.2rem] rounded-xl">
                <BsBoxArrowInRight className="bg-[#151f2b] text-[#ffcc00] dashboard__icon" />
              </div>
              <span className="font-[400] text-[0.7rem]">Buy Crypto</span>
            </div>
          </Link>

          <Link to="/swap">
            <div className="flex flex-col items-center">
              <div className="bg-[#151F2B] h-8 w-12 flex justify-center items-center text-[1.2rem] rounded-xl">
                <AiOutlineSwap className="bg-[#151f2b] text-[#ffcc00] dashboard__icon" />
              </div>
              <span className="font-[400] text-[0.7rem]">Swap</span>
            </div>
          </Link>

          <Link to="/deposit">
            <div className="flex flex-col items-center">
              <div className="bg-[#151F2B] h-8 w-12 flex justify-center items-center text-[1.2rem] rounded-xl">
                <BsBoxArrowInDownLeft className="bg-[#151f2b] text-[#ffcc00] dashboard__icon" />
              </div>
              <span className="font-[400] text-[0.7rem]">Deposit</span>
            </div>
          </Link>
          <Link to="/withdrawal">
            <div className="flex flex-col items-center">
              <div className="bg-[#151F2B] h-8 w-12 flex justify-center items-center text-[1.2rem] rounded-xl">
                <BsBoxArrowUpRight className="bg-[#151f2b] text-[#ffcc00] dashboard__icon" />
              </div>
              <span className="font-[400] text-[0.7rem]">Withdraw</span>
            </div>
          </Link>
        </div>
      </section>
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}
        className="mySwiper dashboard__banner"
      >
        <div className=" dashboard__banner">
          <SwiperSlide className="dashboard__leader">
            <h3>Leaderboard</h3>
            <p>
              You can be a winner by <br />
              just trading.{" "}
              <a href="">
                Click here <br /> to view more
              </a>
            </p>
            <img src={Cup} alt="image of a cup" width={80} height={80} />
          </SwiperSlide>

          <SwiperSlide className="dashboard__kyc">
            <h3>
              Complete <br />
              KYC Setup
            </h3>
          </SwiperSlide>
        </div>
      </Swiper>
      <section className="crypto__assets-container pb-[140px]">
        <div className="crypto__assets mt-4">
          <h3>All Crypto Assets</h3>
          <div className="flex justify-center items-center gap-2">
            <span>Show</span>
            <BiShow className="crypto__assets-icon" />
          </div>
        </div>

        <div>
          <MarketChart />
        </div>
      </section>
      <Navbar />
    </>
  );
};

export default Dashboard;
