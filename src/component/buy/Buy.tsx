// import { Link, useNavigate } from "react-router-dom";
import "../etf/etf.css";
import buypic1 from "../../assets/buypic1.jpg";
import buypic2 from "../../assets/buypic2.png";
import buypic3 from "../../assets/buypic3.jpg";
import buypic6 from "../../assets/buypic6.png";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Buy = () => {
  const etfs = [
    {
      img: buypic1,
      name: "Ramp Network",
      symbol: "https://ramp.network/",
      price: "$79.05",
    },
    {
      img: buypic2,
      name: "CEX IO",
      symbol: "https://cex.io/",
      price: "$36.63",
    },
    {
      img: buypic3,
      name: "Kraken Crypto Exchange",
      symbol: "https://www.kraken.com/",
      price: "$19.04",
    },
    {
      img: buypic6,
      name: "MARGEX",
      symbol: "https://margex.com/en?rid=73128398",
      price: "$67.20",
    },
  ];

  return (
    <article className="pb-[40px]">
      <Navbar />
      <section className="etf__page ">
        <div className="etf__top-nav">
          <h1 className="text-[#ffcc00]">Buy Cryptocurrencies</h1>
        </div>
        <section className="etf__page-content">
          <div className="etf__featured-title">Trusted Brokers</div>
          <div className="etf__grid">
            {etfs.map((etf, index) => (
              <a href={etf.symbol} target="_blank">
                <div key={index} className="etf__card">
                  <img src={etf.img} alt={etf.name} className="etf__image" />
                  <div className="etf__info">
                    <p className="etf__name">{etf.name}</p>
                    <a href={etf.symbol}>
                      <p className="etf__symbol">{etf.symbol}</p>
                    </a>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
        <Footer />
      </section>
    </article>
  );
};

export default Buy;
