import { Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { IoIosInformationCircle } from "react-icons/io";
import Bitcoin from "../../assets/bitcoin-wallet.png";
import Navbar from "../navbar/Navbar";
import "./etf.css";

const EtfAbout = () => {
  const location = useLocation();
  const { etf } = location.state || {};

  // Dynamically import the chart component based on the symbol
  const ChartComponent = lazy(
    () => import(`../chart/etfcharts/${etf.symbol}.tsx`)
  );

  return (
    <article className="">
      <section className="about-etf__nav ">
        <h1>{etf.symbol}</h1>
        <h2>{etf.name}</h2>
        <div>
          <p>About</p>
          <p>Financials</p>
          <p>News</p>
        </div>
      </section>

      <section className="about-etf__container">
        <img src={etf.img} alt={etf.name} />
        <div className="about-etf__container-content">
          <h1>{etf.price}</h1>
          {/* Add equivalent price and market status as needed */}
          <p className="about-etf__market">Market Closed</p>
        </div>
      </section>

      <section className="about-etf__chart">
        <p>
          The Trust’s investment objective is to seek to provide exposure to the
          value of bitcoin held by the Trust, less the expenses of the Trust’s
          operations and other liabilities
        </p>
        <div className="about-etf__main-chart">
          <Suspense fallback={<div>Loading chart...</div>}>
            <ChartComponent />
          </Suspense>
        </div>
      </section>

      <section className="pb-[140px]">
        <div className="about-etf__purchase">
          <img src={Bitcoin} alt="bitcoin image" />
          <div className="flex flex-col">
            <h1>Set a Recurring Purchase</h1>
            <h2>Automate your investing</h2>
          </div>
        </div>
        <div className="about-etf__info">
          <IoIosInformationCircle className="about-etf__info-icon" />
          {etf.symbol} shares are trading within their normal range today.
        </div>
      </section>
      <Navbar />
    </article>
  );
};

export default EtfAbout;
