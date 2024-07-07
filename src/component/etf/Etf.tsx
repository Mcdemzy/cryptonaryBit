import { Link, useNavigate } from "react-router-dom";
import "./etf.css";
import EtfImg1 from "../../assets/etfImg1.png";
import EtfImg2 from "../../assets/etfImg2.png";
import EtfImg3 from "../../assets/etfImg3.jpg";
import EtfImg4 from "../../assets/etfimg4.jpeg";
import EtfImg5 from "../../assets/EtfImg5.jpeg";
import EtfImg6 from "../../assets/EtfImg6.jpeg";
import EtfImg7 from "../../assets/EtfImg7.jpeg";
import EtfImg8 from "../../assets/EtfImg8.png";
import EtfImg9 from "../../assets/EtfImg9.webp";
import EtfImg10 from "../../assets/EtfImg10.webp";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import IntercomComponent from "../intercom/Intercom";

interface Etf {
  img: string;
  name: string;
  symbol: string;
  price: string;
}

const Etf = () => {
  const navigate = useNavigate();
  const etfs = [
    {
      img: EtfImg3,
      name: "Tidal Commodities Trust i-hashdex",
      symbol: "Defi",
      price: "$79.05",
    },
    {
      img: EtfImg2,
      name: "Bitwise Bitcoin Etf",
      symbol: "Bitb",
      price: "$36.63",
    },
    {
      img: EtfImg1,
      name: "Valkyrie Bitcoin Fund",
      symbol: "Brrr",
      price: "$19.04",
    },
    {
      img: EtfImg4,
      name: "Invesco Galaxy Bitcoin Etf",
      symbol: "Btco",
      price: "$67.20",
    },
    {
      img: EtfImg5,
      name: "Tidal Commodities Trust Hashdex",
      symbol: "Defi",
      price: "$79.05",
    },
    {
      img: EtfImg6,
      name: "Franklin Bitcoin Etf",
      symbol: "Ezbc",
      price: "$40.13",
    },
    {
      img: EtfImg7,
      name: "Fidelity Wise Origin Bitcoin",
      symbol: "Fbtc",
      price: "$60.57",
    },
    {
      img: EtfImg8,
      name: "Greyscale Bitcoin Trust",
      symbol: "Gbtc",
      price: "$61.53",
    },
    {
      img: EtfImg9,
      name: "Vaneck Bitcoin Trust",
      symbol: "Hodl",
      price: "$78.30",
    },
    {
      img: EtfImg10,
      name: "Ishares Bitcoin Trust",
      symbol: "Ibit",
      price: "$39.46",
    },
  ];

  const handleEtfClick = (etf: Etf) => {
    navigate("/etfabout", { state: { etf } });
  };

  return (
    <article className="pb-[40px]">
      <IntercomComponent />
      <Header />
      <Navbar />
      <section className="etf__page pt-[80px]">
        <div className="etf__top-nav">
          <h1>Invest</h1>
          <div className="etf__nav-links">
            <p>US Stocks</p>
            <Link to="/fixed-etf">
              <p>Fixed Returns</p>
            </Link>
          </div>
        </div>
        <section className="etf__page-content">
          <div className="etf__featured-title">Featured ETFs</div>
          <div className="etf__grid">
            {etfs.map((etf, index) => (
              <div
                key={index}
                className="etf__card"
                onClick={() => handleEtfClick(etf)}
              >
                <img src={etf.img} alt={etf.name} className="etf__image" />
                <div className="etf__info">
                  <p className="etf__name">{etf.name}</p>
                  <p className="etf__symbol">{etf.symbol}</p>
                  <p className="etf__price">{etf.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </section>
    </article>
  );
};

export default Etf;
