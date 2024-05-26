import "./etf.css";
import EtfImg1 from "../../assets/etfImg1.png";
import EtfImg2 from "../../assets/etfImg2.png";
import EtfImg3 from "../../assets/etfImg3.jpg";
import EtfImg4 from "../../assets/etfimg4.jpeg";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

// import EtfChart from "../chart/EtfChart";
import Defi from "../chart/etfcharts/Defi";
import Ezbc from "../chart/etfcharts/Ezbc";
import Fbtc from "../chart/etfcharts/Fbtc";
import Gbtc from "../chart/etfcharts/Gbtc";
import Hodl from "../chart/etfcharts/Hodl";
import Ibit from "../chart/etfcharts/Ibit";

const Etf = () => {
  const etfs = [
    {
      img: EtfImg3,
      name: "Tidal Commodities Trust i-hashdex",
      symbol: "Defi",
      price: "$79.05",
      link: "/etfabout",
    },

    {
      img: EtfImg2,
      name: "Bitwise Bitcoin Etf",
      symbol: "Bitb",
      price: "$36.63",
      link: "/etfabout",
    },
    {
      img: EtfImg1,
      name: "Valkyrie Bitcoin Fund",
      symbol: "Brrr",
      price: "$19.04",
      link: "/etfabout",
    },
    {
      img: EtfImg4,
      name: "Invesco Galaxy Bitcoin Etf",
      symbol: "Btco",
      price: "$67.20",
      link: "/etfabout",
    },
    // Add more ETF objects as needed
  ];

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
