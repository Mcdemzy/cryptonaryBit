import { useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { stake } from "../../../utils/services";
import { useAuthContext } from "../../../context/authContext";
import IntercomComponent from "../intercom/Intercom";
import { MdClose } from "react-icons/md";
import QRCode from "../../assets/qr-code.png";
import { toPng } from "html-to-image";
import { MdDownloadForOffline } from "react-icons/md";
import "./stake.css";

const Stake = () => {
  const { user } = useAuthContext();
  const location = useLocation();
  const { wallet } = location.state || {};

  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [estimatedAPY, setEstimatedAPY] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const popupRef = useRef(null);

  if (!wallet) {
    return (
      <>
        <IntercomComponent />
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
      </>
    );
  }

  const calculateReturn = () => {
    if (!amount || !estimatedAPY || !duration) return 0;

    const amountValue = parseFloat(amount);
    let durationInDays;

    switch (duration) {
      case "7 days":
        durationInDays = 7;
        break;
      case "2 weeks":
        durationInDays = 14;
        break;
      case "1 month":
        durationInDays = 30;
        break;
      case "3 months":
        durationInDays = 90;
        break;
      case "6 months":
        durationInDays = 180;
        break;
      default:
        durationInDays = 0;
    }

    if (durationInDays === 0) return 0;

    const returnValue = (amountValue * estimatedAPY) / durationInDays;

    return returnValue.toFixed(2);
  };

  const handleStake = async (e: any) => {
    e.preventDefault();

    const amountValue = parseFloat(amount);

    if (!amount) {
      setError("Please enter the amount to stake.");
      return;
    }

    if (amountValue <= 0) {
      setError("The amount must be greater than zero.");
      return;
    }

    if (amountValue < wallet.minimum) {
      setError(
        `The amount must be at least ${wallet.minimum} ${wallet.symbol}.`
      );
      return;
    }

    if (amountValue > wallet.approxValue) {
      setError(
        `Insufficient balance. You have ${wallet.approxValue.toFixed(2)} ${
          wallet.symbol
        }.`
      );
      return;
    }

    if (!duration) {
      setError("Please select a duration.");
      return;
    }

    setError("");
    setIsLoading(true);

    const details = {
      date: new Date().toISOString(),
      type: "Stake",
      amount: amountValue,
      status: "Pending",
      currency: wallet.symbol,
      duration,
      externalWallet: "",
      estimatedAPY,
      userId: user?.userId,
    };

    try {
      const res = await stake(details);
      if (res.ok) {
        setIsLoading(false);
        setMessageSent(true);
      } else {
        setError("Staking failed. Please try again.");
        setIsLoading(false);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
      console.error(error);
    }
  };

  const handleDurationChange = (e: any) => {
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

  const closePopup = () => {
    setMessageSent(false);
  };

  const handleDownloadImage = async () => {
    if (popupRef.current) {
      try {
        const dataUrl = await toPng(popupRef.current);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "stake-details.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Failed to generate image", error);
      }
    }
  };

  return (
    <article>
      <IntercomComponent />
      <div className="staking-page">
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
                <p>{wallet.minimum} $</p>
              </div>
              <div className="info-group">
                <p>Est APY</p>
                <p className="text-green-500">{estimatedAPY}%</p>
              </div>
              <div className="info-group">
                <p>Available Balance</p>
                <p>
                  {wallet.approxValue.toFixed(2)} {wallet.symbol}
                </p>
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
        <Footer />

        {messageSent && (
          <div className="fixed inset-0 flex p-2 justify-center bg-black bg-opacity-50 z-50">
            <article
              className="flex flex-col items-center px-4 md:px-0"
              ref={popupRef}
            >
              <section className="bg-gray-800 w-full md:w-[480px] p-4 rounded-lg">
                <div className="flex justify-between items-center text-white mb-5 pb-3 border-b-2 border-solid border-gray-700">
                  <p className="text-xl">CBIT Stake</p>
                  <MdClose
                    className="text-2xl cursor-pointer"
                    onClick={closePopup}
                  />
                </div>
                <div>
                  <h1 className="text-2xl text-yellow-400 mb-8 font-bold">
                    CryptonaryBit
                  </h1>
                  <div className="flex justify-between gap-2 w-full mb-6">
                    <p className="text-3xl font-bold text-white">
                      {wallet.name}
                    </p>
                    {/* <span className="bg-green-600 p-1 rounded text-xs absolute top-0 right-0">
                      Stake
                    </span> */}
                    <button
                      onClick={handleDownloadImage}
                      className="bg-green-700 text-white text-2xl px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
                    >
                      <MdDownloadForOffline />
                    </button>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium text-lg">
                      Return
                    </span>
                    <h1 className="mt-1 text-4xl font-bold text-green-500">
                      {calculateReturn()} $
                    </h1>
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-400">Duration</span>
                    <p className="text-2xl text-white">{duration}</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-gray-400"> Stake Entry</span>
                    <p className="text-2xl text-white">${amount}</p>
                  </div>
                  <div className="mt-2">
                    <span className="text-gray-400"> Stake Percentage</span>
                    <p className="text-2xl text-white">{estimatedAPY}%</p>
                  </div>
                </div>
              </section>
              <div className="bg-white w-full md:w-[480px] rounded-bl-2xl rounded-br-2xl flex justify-between p-4 mt-2 text-black">
                <div>
                  <p className="text-lg font-medium">
                    Join and claim over $5,000 <br /> in bonuses!
                  </p>
                  <h1 className="text-xl font-semibold">
                    Referral Code: 0EWW6N
                  </h1>
                </div>
                <img src={QRCode} className="w-20 h-20" alt="QR Code" />
              </div>
            </article>
          </div>
        )}
      </div>
      <Navbar />
    </article>
  );
};

export default Stake;
