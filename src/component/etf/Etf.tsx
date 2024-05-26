import "./etf.css";

import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

import Defi from "../chart/etfcharts/Defi";
import Ezbc from "../chart/etfcharts/Ezbc";
import Fbtc from "../chart/etfcharts/Fbtc";
import Gbtc from "../chart/etfcharts/Gbtc";
import Hodl from "../chart/etfcharts/Hodl";
import Ibit from "../chart/etfcharts/Ibit";

const Etf = () => {
  return (
    <article>
      <section className="etf__page bg-[#0d141c] text-white">
        {/* Top Nav */}
        <div className="etf__top-nav">
          <h1>Invest</h1>
          <div className="etf__nav-links">
            <Link to="#">
              <p>Us Stocks</p>
            </Link>
            <Link to="/coming">
              <p>Fixed Returns</p>
            </Link>
          </div>
        </div>

        {/* Etf Page Content */}
        {/* <section className="etf__page-content">
          <div className="mt-4 text-[1.1rem]">Featured Stocks</div>
          {etfs.map((etf, index) => (
            <Link key={index} to={etf.link}>
              <div className="etf__main-display">
                <img src={etf.img} alt={etf.name} width={60} height={60} />
                <p className="etf__main-text">
                  {etf.name} <br />
                  <span>{etf.symbol}</span>
                </p>
                <p className="text-[1rem]">{etf.price}</p>
              </div>
            </Link>
          ))}
        </section> */}
        <section className="flex flex-col mt-[40px] gap-[20px] mb-[80px]">
          <Defi />
          <Ezbc />
          <Fbtc />
          <Gbtc />
          <Hodl />
          <Ibit />
        </section>
      </section>
      <Navbar />
    </article>
  );
};

export default Etf;
