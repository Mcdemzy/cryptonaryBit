import EtfImg1 from "../../assets/etfImg2.png";
import { IoIosInformationCircle } from "react-icons/io";
import "./etf.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const EtfFinancials = () => {
  return (
    <article>
      {/* Etf Financial Top Nav section */}
      <section className="about-etf__nav">
        <h1>Bitb</h1>
        <h2>Bitwise Bitcoin Etf</h2>
        <div>
          <Link to="/etfabout">
            <p>About</p>
          </Link>
          <Link to="#">
            <p>Financials</p>
          </Link>
          <Link to="/news">
            <p>News</p>
          </Link>
        </div>
      </section>

      {/* Etf Financial Main Container section */}
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

      {/* Etf Financial Section */}
      <section className="etf-financials__main pb-[140px]">
        <h1>
          Stats
          <span>
            <IoIosInformationCircle />
          </span>
        </h1>
        <div className="etf-financials__main-content">
          <p>Open</p>
          <p>$66.38</p>
          <p>Volume</p>
          <p>
            1.10 <span>M</span>
          </p>
        </div>
        <div className="etf-financials__main-content">
          <p>High</p>
          <p>$67.55</p>
          <p>Avg Vol</p>
          <p>
            1.46 <span>M</span>
          </p>
        </div>
        <div className="etf-financials__main-content">
          <p>Low</p>
          <p>$65.85</p>
          <p>Mkt Cap</p>
          <p>
            $0.00<span>K</span>
          </p>
        </div>
        <div className="etf-financials__main-content">
          <p>52 Wk High</p>
          <p>$73.62</p>
          <p>P/E Ratio</p>
          <p>
            1.46 <span>M</span>
          </p>
        </div>
        <div className="etf-financials__main-content">
          <p>52 Wk Low</p>
          <p>$38.62</p>
          <p>Div/Yield</p>
          <p>
            0.00% <span></span>
          </p>
        </div>
      </section>
      <Navbar />
    </article>
  );
};

export default EtfFinancials;
