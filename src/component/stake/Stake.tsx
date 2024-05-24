import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Stake = () => {
  const location = useLocation();
  const { wallet } = location.state || {};

  if (!wallet) {
    return <div>No wallet selected for staking.</div>;
  }

  return (
    <article>
      <div className="stake-details-container">
        <h1>Stake {wallet.name}</h1>
        <img src={wallet.icon} alt={wallet.name} width={48} />
        <p>Symbol: {wallet.symbol}</p>
        <p>Approx Value: {wallet.approxValue}</p>
        {/* Add more staking functionality here */}
      </div>
      <Navbar />
    </article>
  );
};

export default Stake;
