import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./onlineBankWithdrawal.css";
import "./withdrawal.css";
import Footer from "../footer/Footer";

const WithdrawalDetail = () => {
  const { method } = useParams();
  const [amount, setAmount] = useState("");

  const paymentMethods = {
    "online-bank": {
      name: "Online Bank",
      processingTime: "1 hour - 1 day",
      fee: "0%",
      limits: "3 - 10,000 USD",
    },
    "btc-withdrawal": {
      name: "BTC Withdrawal",
      processingTime: "Instant - 1 day",
      fee: "0%",
      limits: "4 - 10,000 USD",
    },
    "usdt-withdrawal": {
      name: "USDT Withdrawal",
      processingTime: "Instant - 1 day",
      fee: "0%",
      limits: "2 - 100,000 USD",
    },
  };

  const selectedMethod = paymentMethods[method] || {};

  return (
    <article className="bg-[#060d17]">
      <section className="online-bank-withdrawal-section">
        <div className="withdrawal-header">
          <h1 className="title">{selectedMethod.name} </h1>
          <Link to="/withdrawal" className="back-link">
            See all payment methods
          </Link>
        </div>

        <div className="withdrawal-form">
          <div className="form-group">
            <label htmlFor="payment-method">Payment method</label>
            <select id="payment-method" className="form-control">
              <option>{selectedMethod.name}</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="currency">Currency</label>
            <select id="currency" className="form-control">
              <option>NGN</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="account">From account</label>
            <div className="account-info">
              <input
                type="text"
                id="account"
                className="form-control"
                value="407121577"
                readOnly
              />
              <span className="balance">0.00 USD</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              className="form-control"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <span className="limits">{selectedMethod.limits}</span>
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
            <p className="amount">
              {(Number(amount) * 1458.65).toFixed(2)} NGN
            </p>
          </div>

          <button
            className="continue-btn"
            disabled={Number(amount) < 3 || Number(amount) > 10000}
          >
            Continue
          </button>
        </div>

        <div className="additional-info pb-[70px]">
          <div className="terms-section">
            <h3>Terms</h3>
            <p>
              Average payment time{" "}
              <strong>{selectedMethod.processingTime}</strong>
            </p>
            <p>
              Fee <strong>{selectedMethod.fee}</strong>
            </p>
          </div>

          <div className="faq-section">
            <h3>FAQ</h3>
            <a href="#">
              How to deposit and withdraw with online bank transfers
            </a>
          </div>
        </div>
      </section>
      <Footer />
      <Navbar />
    </article>
  );
};

export default WithdrawalDetail;
