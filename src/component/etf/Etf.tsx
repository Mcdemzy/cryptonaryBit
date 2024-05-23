import "./etf.css";
import EtfImg1 from "../../assets/etfImg1.png";
import EtfImg2 from "../../assets/etfImg2.png";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Etf = () => {
  return (
    <article>
      <section className="etf__page">
        {/* Top Nav */}
        <div className="etf__top-nav">
          <h1>Invest</h1>
          <div className="etf__nav-links">
            <a href="">
              <p>Us Stocks</p>
            </a>
            <a href="">
              <p>Fixed Returns</p>
            </a>
          </div>
        </div>

        {/* Etf Page Content */}
        <section className="etf__page-content">
          <div className="mt-4 text-[1.1rem]">Featured Stocks</div>
          <Link to="/">
            <div className="etf__main-display">
              <img src={EtfImg1} alt="" width={60} height={60} />
              <p className="etf__main-text">
                Valkyrie Bitcoin Fund <br />
                <span>Brrr</span>
              </p>
              <p className="text-[1rem]">$62.50</p>
            </div>
          </Link>
          <Link to="/etfabout">
            <div className="etf__main-display">
              <img src={EtfImg2} alt="" width={60} height={60} />
              <p className="etf__main-text">
                Valkyrie Bitcoin Fund <br />
                <span>Brrr</span>
              </p>
              <p className="text-[1rem]">$62.50</p>
            </div>
          </Link>
        </section>
      </section>
      <Navbar />
    </article>
  );
};

export default Etf;
