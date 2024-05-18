import EtfImg1 from "../../assets/etfImg2.png";
import TradingViewWidget from "../chart/TradingViewWidget";
import "./etf.css";

const EtfAbout = () => {
  return (
    <article>
      {/* About Etf Top Nav section */}
      <section className="about-etf__nav">
        <h1>Bitb</h1>
        <h2>Bitwise Bitcoin Etf</h2>
        <div>
          <p>About</p>
          <p>Financials</p>
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
        <p className="">
          The Trust’s investment objective is to seek to provide exposure to the
          value of bitcoin held by the Trust, less the expenses of the Trust’s
          operations and other liabilities
        </p>

        <div>
          <TradingViewWidget />
        </div>
      </section>
    </article>
  );
};

export default EtfAbout;
