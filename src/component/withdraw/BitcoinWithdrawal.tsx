import { useState, ChangeEvent } from "react"; // Import ChangeEvent
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./bitcoinwithdrawal.css";

const BitcoinWithdrawal = () => {
  const [amount, setAmount] = useState("");
  const [externalWallet, setExternalWallet] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleExternalWalletChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExternalWallet(e.target.value);
  };

  const handleWithdrawal = () => {
    // Simulate withdrawal process
    setTimeout(() => {
      setMessageSent(true);
      setPopupMessage(`Your BTC withdrawal is being processed`);
      // Reset input field data
      setAmount("");
      setExternalWallet("");
    }, 1000);
  };

  const isWithdrawalEnabled = () => {
    return (
      Number(amount) >= 0.00001 &&
      Number(amount) <= 10000 &&
      externalWallet.trim() !== ""
    );
  };

  return (
    <article className="bg-[#060d17]">
      <section className="bitcoin-withdrawal-section pb-[50px]">
        <div className="withdrawal-header">
          <h1 className="title">Bitcoin (BTC) Withdrawal</h1>
          <Link to="/withdrawal" className="back-link">
            See all payment methods
          </Link>
        </div>

        <div className="withdrawal-form">
          <div className="form-group">
            <label htmlFor="payment-method">Payment method</label>
            <select id="payment-method" className="form-control" disabled>
              <option>Bitcoin (BTC)</option>
              <option>USDT Withdrawal</option>
              <option>Online Bank</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="currency">Currency</label>
            <select id="currency" className="form-control" disabled>
              <option>BTC</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="external-wallet">To External Wallet</label>
            <input
              type="text"
              id="external-wallet"
              className="form-control"
              placeholder="Enter your Bitcoin wallet address"
              value={externalWallet}
              onChange={handleExternalWalletChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="account">From Wallet at CryptonaryBit</label>
            <div className="account-info">
              <select id="account" className="form-control">
                <option>Bitcoin (BTC)</option>
              </select>
              <span className="balance">0.00000000 BTC</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              className="form-control"
              placeholder="0.00000000"
              value={amount}
              onChange={handleAmountChange}
            />
            <span className="limits">0.00001 - 10,000 USD</span>
          </div>

          <div className="info-box">
            <p>
              Enter the amount you want to withdraw. It should fall within the
              suggested range and cannot be more than available on your trading
              account or wallet. The rest of the funds may be withdrawn using
              other methods.
            </p>
          </div>

          <div className="total-box">
            <p>To be withdrawn</p>
            <p className="amount">{amount} BTC</p>
          </div>

          <button
            className="continue-btn"
            disabled={!isWithdrawalEnabled()}
            onClick={handleWithdrawal}
          >
            Continue
          </button>
        </div>

        <div className="additional-info">
          <div className="terms-section">
            <h3>Terms</h3>
            <p>
              Average payment time <strong>Instant</strong>
            </p>
            <p>
              Fee <strong>0%</strong>
            </p>
          </div>

          <div className="faq-section">
            <h3>FAQ</h3>
            <a href="#">Find out more about crypto payments</a>
          </div>
        </div>

        <Footer />
      </section>
      <Navbar />

      {/* Display popup when message is sent */}
      {messageSent && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button onClick={() => setMessageSent(false)}>Close</button>
          </div>
        </div>
      )}
    </article>
  );
};

export default BitcoinWithdrawal;
