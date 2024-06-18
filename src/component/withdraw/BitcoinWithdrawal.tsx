import { useState, ChangeEvent } from "react";
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
      saveTransaction({
        date: new Date().toISOString(),
        type: "Withdrawal",
        amount: parseFloat(amount),
        status: "Pending",
        currency: "BTC",
      });
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

  const saveTransaction = (transaction: {
    date: string;
    type: string;
    amount: number;
    status: string;
    currency: string;
  }) => {
    const storedTransactions = localStorage.getItem("transactions");
    const transactions = storedTransactions
      ? JSON.parse(storedTransactions)
      : [];
    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  };

  return (
    <article className="bitcoin-withdrawal-bg">
      <section className="bitcoin-withdrawal-section">
        <div className="bitcoin-withdrawal-header">
          <h1 className="bitcoin-withdrawal-title">Bitcoin (BTC) Withdrawal</h1>
          <Link to="/withdrawal" className="bitcoin-withdrawal-back-link">
            See all payment methods
          </Link>
        </div>

        <div className="bitcoin-withdrawal-form">
          <div className="bitcoin-withdrawal-form-group">
            <label htmlFor="payment-method">Payment method</label>
            <select
              id="payment-method"
              className="bitcoin-withdrawal-form-control"
              disabled
            >
              <option>Bitcoin (BTC)</option>
              <option>USDT Withdrawal</option>
              <option>Online Bank</option>
            </select>
          </div>

          <div className="bitcoin-withdrawal-form-group">
            <label htmlFor="currency">Currency</label>
            <select
              id="currency"
              className="bitcoin-withdrawal-form-control"
              disabled
            >
              <option>BTC</option>
            </select>
          </div>

          <div className="bitcoin-withdrawal-form-group">
            <label htmlFor="external-wallet">To External Wallet</label>
            <input
              type="text"
              id="external-wallet"
              className="bitcoin-withdrawal-form-control"
              placeholder="Enter your Bitcoin wallet address"
              value={externalWallet}
              onChange={handleExternalWalletChange}
              required
            />
          </div>

          <div className="bitcoin-withdrawal-form-group">
            <label htmlFor="account">From Wallet at CryptonaryBit</label>
            <div className="bitcoin-withdrawal-account-info">
              <select id="account" className="bitcoin-withdrawal-form-control">
                <option>Bitcoin (BTC)</option>
              </select>
              <span className="bitcoin-withdrawal-balance">0.00000000 BTC</span>
            </div>
          </div>

          <div className="bitcoin-withdrawal-form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              className="bitcoin-withdrawal-form-control"
              placeholder="0.00000000"
              value={amount}
              onChange={handleAmountChange}
            />
            <span className="bitcoin-withdrawal-limits">
              0.00001 - 10,000 USD
            </span>
          </div>

          <div className="bitcoin-withdrawal-info-box">
            <p>
              Enter the amount you want to withdraw. It should fall within the
              suggested range and cannot be more than available on your trading
              account or wallet. The rest of the funds may be withdrawn using
              other methods.
            </p>
          </div>

          <div className="bitcoin-withdrawal-total-box">
            <p>To be withdrawn</p>
            <p className="bitcoin-withdrawal-amount">{amount} BTC</p>
          </div>

          <button
            className="bitcoin-withdrawal-continue-btn"
            disabled={!isWithdrawalEnabled()}
            onClick={handleWithdrawal}
          >
            Continue
          </button>
        </div>

        <div className="bitcoin-withdrawal-additional-info">
          <div className="bitcoin-withdrawal-terms-section">
            <h3>Terms</h3>
            <p>
              Average payment time <strong>Instant</strong>
            </p>
            <p>
              Fee <strong>0%</strong>
            </p>
          </div>

          <div className="bitcoin-withdrawal-faq-section">
            <h3>FAQ</h3>
            <Link to="/faq">Find out more about crypto payments</Link>
          </div>
        </div>

        <Footer />
      </section>
      <Navbar />

      {messageSent && (
        <div className="bitcoin-withdrawal-popup">
          <div className="bitcoin-withdrawal-popup-content">
            <p>{popupMessage}</p>
            <button onClick={() => setMessageSent(false)}>Close</button>
          </div>
        </div>
      )}
    </article>
  );
};

export default BitcoinWithdrawal;
