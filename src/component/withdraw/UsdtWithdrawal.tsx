import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./usdtwithdrawal.css";
import { withdraw } from "../../../utils/services";
import { useAuthContext } from "../../../context/authContext";

const USDTWithdrawal = () => {
  const { user } = useAuthContext();
  const [amount, setAmount] = useState("");
  const [externalWallet, setExternalWallet] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleExternalWalletChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExternalWallet(e.target.value);
  };

  const details = {
    date: new Date().toISOString(),
    type: "Withdrawal",
    amount: parseFloat(amount),
    status: "Pending",
    currency: "USDT",
    externalWallet,
    userId: user?.userId
  }

  const handleWithdrawal = async () => {
    try {
      setLoading(true);
      const res = await withdraw(details);
      if (res.ok) {
        setLoading(false);
        setMessageSent(true);
        setPopupMessage(`Your USDT withdrawal is being processed`);
        setAmount("");
        setExternalWallet("");
      }
    } catch (error) {
      alert("deposit error please try again");
      setLoading(false);
      console.log(error);
    }
  };

  const isWithdrawalEnabled = () => {
    return (
      Number(amount) >= 3 &&
      Number(amount) <= 10000 &&
      externalWallet.trim() !== ""
    );
  };

  return (
    <article className="usdt-withdrawal-bg">
      <section className="usdt-withdrawal-section">
        <div className="usdt-withdrawal-header">
          <h1 className="usdt-withdrawal-title">
            Tether (USDT TRC20) Withdrawal
          </h1>
          <Link to="/withdrawal" className="usdt-withdrawal-back-link">
            See all payment methods
          </Link>
        </div>

        <div className="usdt-withdrawal-form">
          <div className="usdt-withdrawal-form-group">
            <label htmlFor="payment-method">Payment method</label>
            <select
              id="payment-method"
              className="usdt-withdrawal-form-control"
              disabled
            >
              <option>Tether (USDT TRC20)</option>
              <option>Bitcoin (BTC)</option>
              <option>Online Bank</option>
            </select>
          </div>

          <div className="usdt-withdrawal-form-group">
            <label htmlFor="currency">Currency</label>
            <select
              id="currency"
              className="usdt-withdrawal-form-control"
              disabled
            >
              <option>USDT</option>
            </select>
          </div>

          <div className="usdt-withdrawal-form-group">
            <label htmlFor="external-wallet">To External TRON account</label>
            <input
              type="text"
              id="external-wallet"
              className="usdt-withdrawal-form-control"
              placeholder="Enter your TRON wallet address"
              value={externalWallet}
              onChange={handleExternalWalletChange}
              required
            />
          </div>

          <div className="usdt-withdrawal-form-group">
            <label htmlFor="account">From account</label>
            <div className="usdt-withdrawal-account-info">
              <select id="account" className="usdt-withdrawal-form-control">
                <option>USDT</option>
              </select>
              <span className="usdt-withdrawal-balance">0.00 USDT</span>
            </div>
          </div>

          <div className="usdt-withdrawal-form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              className="usdt-withdrawal-form-control"
              placeholder="0.00"
              value={amount}
              onChange={handleAmountChange}
            />
            <span className="usdt-withdrawal-limits">3.00 - 10,000 USD</span>
          </div>

          <div className="usdt-withdrawal-info-box">
            <p>
              Enter the amount you want to withdraw. It should fall within the
              suggested range and cannot be more than available on your trading
              account or wallet. The rest of the funds may be withdrawn using
              other methods.
            </p>
          </div>

          <div className="usdt-withdrawal-total-box">
            <p>To be withdrawn</p>
            <p className="usdt-withdrawal-amount">{amount} USDT</p>
          </div>

          <button
            className="usdt-withdrawal-continue-btn"
            disabled={!isWithdrawalEnabled()}
            onClick={handleWithdrawal}
          >
            {loading ? "loading...." : "continue"}
          </button>
        </div>

        <div className="usdt-withdrawal-additional-info">
          <div className="usdt-withdrawal-terms-section">
            <h3>Terms</h3>
            <p>
              Average payment time <strong>Instant</strong>
            </p>
            <p>
              Fee <strong>0%</strong>
            </p>
          </div>

          <div className="usdt-withdrawal-faq-section">
            <h3>FAQ</h3>
            <Link to="/faq">Find out more about crypto payments</Link>
          </div>
        </div>

        <Footer />
      </section>
      <Navbar />

      {messageSent && (
        <div className="usdt-withdrawal-popup">
          <div className="usdt-withdrawal-popup-content">
            <p>{popupMessage}</p>
            <button onClick={() => setMessageSent(false)}>Close</button>
          </div>
        </div>
      )}
    </article>
  );
};

export default USDTWithdrawal;
