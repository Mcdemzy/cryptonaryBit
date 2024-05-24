import EtfImg1 from "../../assets/etfImg2.png";
import NewsWidget from "../chart/NewsWidget";
// import { IoIosInformationCircle } from "react-icons/io";
// import Bitcoin from "../../assets/bitcoin-wallet.png";

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
          <Link to="/etfabout">
            <p>About</p>
          </Link>
          <Link to="/etffinancials">
            <p>Financials</p>
          </Link>
          <Link to="#">
            <p>News</p>
          </Link>
        </div>
      </section>

      {/* About Etf Main Container section */}

      <section>
        <div className="about-etf__main-chart pb-[40px]">
          <NewsWidget />
        </div>
        <NewsWidget />
      </section>

      <Navbar />
    </article>
  );
};

export default EtfAbout;
