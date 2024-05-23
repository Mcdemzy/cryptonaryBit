import EtfImg1 from "../../assets/etfImg2.png";
import TradingViewWidget from "../chart/TradingViewWidget";
import { IoIosInformationCircle } from "react-icons/io";
import Bitcoin from "../../assets/bitcoin-wallet.png";

import "./etf.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const EtfAbout = () => {
  return (
    <article>
      {/* About Etf Top Nav section */}
      <section className="about-etf__nav">
        <h1>Bitb</h1>
        <h2>Bitwise Bitcoin Etf</h2>
        <div>
          <p>About</p>
          <p>
            <Link to="/etffinancials">Financials</Link>
          </p>
          <p>News</p>
        </div>
      </section>

      {/* About Etf Main Container section */}
      <section className="about-etf__container">
        <img src={EtfImg1} alt="" />
        <div className="about-etf__container-content">
          <h1>$36.62</h1>
          <h2>~₦55,479.30</h2>
          <div>
            <span className="about-etf__up">up</span> 3.07% ($1.09)
            <span className="about-etf__day">Today</span>
          </div>
          <p className="about-etf__market">Market Closed</p>
        </div>
      </section>

      {/* About Etf Chart Section */}
      <section className="about-etf__chart">
        <p>
          The Trust’s investment objective is to seek to provide exposure to the
          value of bitcoin held by the Trust, less the expenses of the Trust’s
          operations and other liabilities
        </p>

        <div className="about-etf__main-chart">
          <TradingViewWidget />
        </div>
      </section>

      <section className="pb-[140px]">
        <div className="about-etf__purchase">
          <img src={Bitcoin} alt="" />
          <div className="flex flex-col">
            <h1>Set a Recurring Purchase</h1>
            <h2>Automate your investing</h2>
          </div>
        </div>
        <div className="about-etf__info">
          <IoIosInformationCircle className="about-etf__info-icon" />
          BITB shares are trading within their normal range today.
        </div>
      </section>
      <Navbar />
    </article>
  );
};

export default EtfAbout;
