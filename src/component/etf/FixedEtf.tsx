import { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./fixedetf.css";
import EtfImg1 from "../../assets/etfImg1.png";
import EtfImg2 from "../../assets/etfImg2.png";
import EtfImg3 from "../../assets/etfImg3.jpg";
import EtfImg4 from "../../assets/etfimg4.jpeg";
import EtfImg5 from "../../assets/EtfImg5.jpeg";
import EtfImg6 from "../../assets/EtfImg6.jpeg";

const predefinedETFs = [
  {
    img: EtfImg3,
    name: "Tidal Commodities Trust i-hashdex",
    symbol: "Defi",
    price: 79.05,
  },
  { img: EtfImg2, name: "Bitwise Bitcoin Etf", symbol: "Bitb", price: 36.63 },
  { img: EtfImg1, name: "Valkyrie Bitcoin Fund", symbol: "Brrr", price: 19.04 },
  {
    img: EtfImg4,
    name: "Invesco Galaxy Bitcoin Etf",
    symbol: "Btco",
    price: 67.2,
  },
  {
    img: EtfImg5,
    name: "Tidal Commodities Trust Hashdex",
    symbol: "Defi",
    price: 79.05,
  },
  { img: EtfImg6, name: "Franklin Bitcoin Etf", symbol: "Ezbc", price: 40.13 },
];

const FixedEtf = () => {
  const [selectedEtf, setSelectedEtf] = useState(predefinedETFs[0]);
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [estimatedAPY, setEstimatedAPY] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

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
      setPopupMessage(`Staked ${amount} ${selectedEtf.symbol} for ${duration}`);
    }, 2000);
  };

  const handleDurationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedDuration = e.target.value;
    setDuration(selectedDuration);

    let apy;
    switch (selectedDuration) {
      case "3 days":
        apy = 75;
        break;
      case "7 days":
        apy = 150;
        break;
      case "2 weeks":
        apy = 300;
        break;
      case "1 month":
        apy = 600;
        break;
      case "3 months":
        apy = 1800;
        break;
      case "6 months":
        apy = 3600;
        break;
      default:
        apy = 0;
    }
    setEstimatedAPY(apy);
  };

  return (
    <article>
      <div className="fixed-etf-page">
        <div className="fixed-etf-container">
          <div className="fixed-etf-stats-container">
            <h2>Select an ETF to Stake</h2>
            <div className="fixed-etf-stats">
              {predefinedETFs.map((etf, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedEtf(etf)}
                  className={`fixed-etf-card ${
                    selectedEtf.name === etf.name ? "selected" : ""
                  }`}
                >
                  <img src={etf.img} alt={etf.name} width={48} />
                  <p>{etf.name}</p>
                  <p>{etf.symbol}</p>
                  <p>Price: ${etf.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fixed-etf-stake-details">
            <h2>{selectedEtf.name}</h2>
            <img src={selectedEtf.img} alt={selectedEtf.name} width={48} />
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
                  <option value="3 days">3 days</option>
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
                <p>0.01 {selectedEtf.symbol}</p>
              </div>
              <div className="info-group">
                <p>Est APY</p>
                <p className="text-green-500">{estimatedAPY}%</p>
              </div>
              <div className="info-group">
                <p>Available Balance</p>
                <p>0.5 {selectedEtf.symbol}</p>
              </div>
              <button
                type="submit"
                className={`fixed-etf-stake-button ${
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
        <Footer />

        {/* Display popup when message is sent */}
        {messageSent && (
          <div className="popup">
            <p>{popupMessage}</p>
            <button onClick={() => setMessageSent(false)}>Close</button>
          </div>
        )}
      </div>
      <Navbar />
    </article>
  );
};

export default FixedEtf;
