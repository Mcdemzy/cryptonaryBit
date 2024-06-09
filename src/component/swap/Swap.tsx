import { useState } from "react";
import "./swap.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Swap = () => {
  // Define the state types
  const [fromAmount, setFromAmount] = useState<string>("");
  const [toAmount, setToAmount] = useState<string>("");
  const [fromCurrency, setFromCurrency] = useState<string>("BTC");
  const [toCurrency, setToCurrency] = useState<string>("ETH");
  const [balance] = useState<number>(400); // State for balance
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false); // State for popup visibility
  const [popupMessage, setPopupMessage] = useState<string>(""); // State for popup message

  // Define the conversion rates with a type
  const conversionRates: Record<string, Record<string, number>> = {
    BTC: {
      ETH: 18.44,
      SOL: 350,
      USDT: 31000,
      BNB: 80,
      BCH: 100,
      TRX: 600000,
      BTC: 1, // Self-conversion rate can be 1
    },
    ETH: {
      BTC: 0.0542,
      SOL: 19,
      USDT: 1700,
      BNB: 4.3,
      BCH: 5.6,
      TRX: 32700,
      ETH: 1, // Self-conversion rate can be 1
    },
    SOL: {
      BTC: 0.0029,
      ETH: 0.053,
      USDT: 90,
      BNB: 0.22,
      BCH: 0.28,
      TRX: 1720,
      SOL: 1, // Self-conversion rate can be 1
    },
    USDT: {
      BTC: 0.000032,
      ETH: 0.00059,
      SOL: 0.011,
      BNB: 0.0025,
      BCH: 0.0032,
      TRX: 19.2,
      USDT: 1, // Self-conversion rate can be 1
    },
    BNB: {
      BTC: 0.0125,
      ETH: 0.233,
      SOL: 4.54,
      USDT: 400,
      BCH: 1.28,
      TRX: 7700,
      BNB: 1, // Self-conversion rate can be 1
    },
    BCH: {
      BTC: 0.01,
      ETH: 0.18,
      SOL: 3.57,
      USDT: 312,
      BNB: 0.78,
      TRX: 6000,
      BCH: 1, // Self-conversion rate can be 1
    },
    TRX: {
      BTC: 0.0000017,
      ETH: 0.0000306,
      SOL: 0.00058,
      USDT: 0.052,
      BNB: 0.00013,
      BCH: 0.00017,
      TRX: 1, // Self-conversion rate can be 1
    },
  };

  const handleFromAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const amount = event.target.value;
    setFromAmount(amount);

    if (fromCurrency && toCurrency) {
      const convertedAmount =
        parseFloat(amount) * conversionRates[fromCurrency][toCurrency];
      setToAmount(convertedAmount.toString());
    }
  };

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    if (name === "fromCurrency") {
      setFromCurrency(value);
      if (value === toCurrency) {
        setToCurrency(
          Object.keys(conversionRates).find((currency) => currency !== value) ||
            "ETH"
        );
      }
    } else {
      setToCurrency(value);
      if (value === fromCurrency) {
        setFromCurrency(
          Object.keys(conversionRates).find((currency) => currency !== value) ||
            "BTC"
        );
      }
    }

    // Recalculate the toAmount based on the new currencies
    if (fromAmount && fromCurrency && toCurrency) {
      const newToAmount =
        parseFloat(fromAmount) * conversionRates[fromCurrency][toCurrency];
      setToAmount(newToAmount.toString());
    }
  };

  const handleContinueClick = () => {
    if (balance === 0) {
      setPopupMessage("Your balance is low. Please deposit more funds.");
    } else {
      setPopupMessage(`Successfully swapped ${fromCurrency}.`);
    }
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const availableCurrencies = Object.keys(conversionRates);

  return (
    <article>
      <Navbar />
      <div className="swap-page">
        <h1 className="swap-title">Swap</h1>
        <div className="swap-container">
          <div className="swap-box">
            <div className="swap-input">
              <input
                type="number"
                value={fromAmount}
                onChange={handleFromAmountChange}
                placeholder="0.00"
              />
              <select
                name="fromCurrency"
                value={fromCurrency}
                onChange={handleCurrencyChange}
              >
                {availableCurrencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <p>Available Balance ${balance.toFixed(2)}</p>
            </div>
          </div>
          <div className="swap-icon">⇄</div>
          <div className="swap-box">
            <div className="swap-input">
              <input
                type="number"
                value={toAmount}
                placeholder="0.00"
                disabled
              />
              <select
                name="toCurrency"
                value={toCurrency}
                onChange={handleCurrencyChange}
              >
                {availableCurrencies
                  .filter((currency) => currency !== fromCurrency)
                  .map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        <button
          className="continue-btn"
          disabled={!fromAmount}
          onClick={handleContinueClick}
        >
          Continue
        </button>
        {isPopupVisible && (
          <div className="swap-popup">
            <div className="swap-popup-content">
              <p>{popupMessage}</p>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </article>
  );
};

export default Swap;
