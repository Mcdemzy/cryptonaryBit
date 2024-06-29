import "./coin.css";
import CryptoIcon from "../../assets/crypto1.png";
import CoinChart from "../chart/CoinChart";

const Bch = () => {
  return (
    <article className="h-[fit-content] pb-[10px] bg-[#0d141c]">
      {/* Coin Header section */}
      <section className="coin-details__container">
        {/* Image of the coin clicked should be here */}
        <img src={CryptoIcon} alt="cryptoicon" width={48} />
        {/* Name of the coin clicked should be here */}
        <h1>Bch</h1>
        {/* Current Market Price of the coin clicked should be here */}
        <h2>$57,098.12</h2>
        {/* Current profit/loss margin of the coin clicked should be here */}
        <p>+1.43%</p>
      </section>

      <div className="about-etf__main-chart">
        <CoinChart />
      </div>
    </article>
  );
};

export default Bch;
