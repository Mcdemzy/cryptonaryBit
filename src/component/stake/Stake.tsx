import { useState, ChangeEvent, FormEvent } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./stake.css";
import Footer from "../footer/Footer";

const Stake = () => {
  const location = useLocation();
  const { wallet } = location.state || {};

  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [estimatedAPY, setEstimatedAPY] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  if (!wallet) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-lg font-bold mb-4">
          No wallet selected for staking.
        </p>
        <p className="text-gray-400 mb-4 text-center">
          Go to the wallet page and select a wallet to stake.
        </p>
        <Link
          to="/wallet"
          className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all"
        >
          Go to Wallet Page
        </Link>
      </div>
    );
  }

  const handleStake = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!amount) {
      setError("Please enter the amount to stake.");
      return;
    }

    if (parseFloat(amount) <= 0) {
      setError("The amount must be greater than zero.");
      return;
    }

    if (!duration) {
      setError("Please select a duration.");
      return;
    }

    setError("");
    setIsLoading(true);

    // Simulate staking process
    setTimeout(() => {
      setIsLoading(false);
      setMessageSent(true);
      setPopupMessage(`Staked ${amount} ${wallet.symbol} for ${duration}`);
    }, 2000);
  };

  const handleDurationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedDuration = e.target.value;
    setDuration(selectedDuration);

    let apy;
    switch (selectedDuration) {
      case "7 days":
        apy = 250;
        break;
      case "2 weeks":
        apy = 750;
        break;
      case "1 month":
        apy = 1000;
        break;
      case "3 months":
        apy = 3000;
        break;
      case "6 months":
        apy = 6000;
        break;
      default:
        apy = 0;
    }
    setEstimatedAPY(apy);
  };

  return (
    <article>
      <div className="staking-page pb-[100px]">
        <div className="stake-container">
          <div className="stats-container">
            <h2>Stats</h2>
            <div className="stats">
              <div>
                <p>Name</p>
                <p>{wallet.name}</p>
              </div>
              <div>
                <p>Market Cap Rank</p>
                <p>{wallet.marketCapRank}</p>
              </div>
              <div>
                <p>Current Price</p>
                <p>{wallet.currentPrice}</p>
              </div>
              <div>
                <p>Market Cap</p>
                <p>{wallet.marketCap}</p>
              </div>
              <div>
                <p>Total Volume</p>
                <p>{wallet.totalVolume}</p>
              </div>
              <div>
                <p>Total Volume 24HR</p>
                <p>{wallet.totalVolume24Hr}</p>
              </div>
              <div>
                <p>High 24HR</p>
                <p>{wallet.high24Hr}</p>
              </div>
              <div>
                <p>Low 24HR</p>
                <p>{wallet.low24Hr}</p>
              </div>
            </div>
          </div>

          <div className="stake-details">
            <h2>{wallet.name}</h2>
            <img src={wallet.icon} alt={wallet.name} width={48} />
            <form onSubmit={handleStake} className="space-y-4">
              <div className="input-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              <div className="input-group">
                <label htmlFor="duration">Duration</label>
                <select
                  id="duration"
                  value={duration}
                  onChange={handleDurationChange}
                  required
                  className="form-input"
                >
                  <option value="" disabled>
                    Select duration
                  </option>
                  <option value="7 days">7 days</option>
                  <option value="2 weeks">2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="3 months">3 months</option>
                  <option value="6 months">6 months</option>
                </select>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <div className="info-group">
                <p>Minimum</p>
                <p>
                  {wallet.minimum} {wallet.symbol}
                </p>
              </div>
              <div className="info-group">
                <p>Est APY</p>
                <p className=" text-green-500">{estimatedAPY}%</p>
              </div>
              <div className="info-group">
                <p>Available Balance</p>
                <p>0.5 {wallet.symbol}</p>
              </div>
              <button
                type="submit"
                className={`stake-button ${
                  isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-yellow-600 transition-all"
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Staking..." : "Stake"}
              </button>
            </form>
          </div>
        </div>

        {/* Display popup when message is sent */}
        {messageSent && (
          <div className="popup">
            <p>{popupMessage}</p>
            <button onClick={() => setMessageSent(false)}>Close</button>
          </div>
        )}
        <Footer />
      </div>
      <Navbar />
    </article>
  );
};

export default Stake;
