import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./onlineBankWithdrawal.css";

const OnlineBankWithdrawal = () => {
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleWithdrawal = () => {
    // Simulate withdrawal process
    setTimeout(() => {
      setMessageSent(true);
      setPopupMessage(`Your Online withdrawal is being processed`);
      // Reset input field data
      setAmount("");
      setCardNumber("");
      setCvc("");
    }, 1000);
  };

  const isWithdrawalEnabled =
    Number(amount) >= 3 &&
    Number(amount) <= 10000 &&
    cardNumber.trim() !== "" &&
    cvc.trim() !== "";

  return (
    <article className="bg-[#060d17]">
      <section className="online-bank-withdrawal-section pb-[50px]">
        <div className="withdrawal-header">
          <h1 className="title">Online Bank Withdrawal</h1>
          <Link to="/withdrawal" className="back-link">
            See all payment methods
          </Link>
        </div>

        <div className="withdrawal-form">
          <div className="form-group">
            <label htmlFor="payment-method">Payment method</label>
            <select id="payment-method" className="form-control" disabled>
              <option>Online Bank</option>
              <option>BTC Withdrawal</option>
              <option>USDT Withdrawal</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="currency">Currency</label>
            <select id="currency" className="form-control" disabled>
              <option>USD</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="account">From account</label>
            <div className="account-info">
              <input
                type="text"
                id="account"
                className="form-control"
                value="600154598"
                readOnly
              />
              <span className="balance">0.00 USD</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="card-number">Card Details</label>
            <div className="card__details">
              <input
                type="number"
                id="card-number"
                className="form-control"
                placeholder="1234-5678-9000-0000"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <input
                type="number"
                id="cvc"
                className="form-control"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
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
            <span className="limits">3.00 - 10,000.00 USD</span>
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
            disabled={!isWithdrawalEnabled}
            onClick={handleWithdrawal}
          >
            Withdraw
          </button>
        </div>

        <div className="additional-info">
          <div className="terms-section">
            <h3>Terms</h3>
            <p>
              Average payment time <strong>1 hour</strong>
            </p>
            <p>
              Fee <strong>0%</strong>
            </p>
          </div>

          <div className="faq-section">
            <h3>FAQ</h3>
            <Link to="/faq">
              How to deposit and withdraw with online bank transfers
            </Link>
          </div>
        </div>

        <footer className="withdrawal-footer mt-[40px]">
          <p className="footer-text">
            CryptonaryBit (SC) LTD is a Securities Dealer registered in
            Seychelles with registration number 8423606-1 and authorised by the
            Financial Services Authority (FSA) with licence number SD025. The
            registered office of CryptonaryBit (SC) LTD is at 9A CT House, 2nd
            floor, Providence, Mahe, Seychelles.
          </p>
          <p className="footer-text">
            The information on this website may only be copied with the express
            written permission of CryptonaryBit. General Risk Warning: CFDs are
            leveraged products. Trading in CFDs carries a level of risk thus may
            not be appropriate for all investors. The investment value can both
            increase and decrease and the investors may lose all their invested
            capital. Under no circumstances shall the Company have any liability
            to any person or entity for any loss or damage in whole or part
            caused by, resulting from, or relating to any transactions related
            to CFDs. <a href="#">Learn more</a>
          </p>
          <p className="footer-text">
            CryptonaryBit complies with the Payment Card Industry Data Security
            Standard (PCI DSS) to ensure your security and privacy. We conduct
            regular vulnerability scans and penetration tests in accordance with
            the PCI DSS requirements for our business model.
          </p>
          <div className="footer-links">
            <a href="/docs/preventingmoneylaundering.pdf" target="_blank">
              Preventing Money Laundering
            </a>
            <a href="/docs/privacy-policy.pdf" target="_blank">
              Privacy Policy
            </a>
            <a href="#">Terms & Conditions</a>
            <Link to="/contact">Contact Us</Link>
            <a href="/docs/risk&disclosure.pdf" target="_blank">
              Risk & Disclosure
            </a>
          </div>
          <p className="footer-contact">
            Email:{" "}
            <a href="mailto:info@CryptonaryBit.com">info@CryptonaryBit.com</a>
          </p>
          <p className="footer-copyright">&copy; 2008 - 2024. CryptonaryBit</p>
        </footer>

        {/* Display popup when message is sent */}
        {messageSent && (
          <div className="popup">
            <div className="popup-content">
              <p>{popupMessage}</p>
              <button onClick={() => setMessageSent(false)}>Close</button>
            </div>
          </div>
        )}
      </section>
      <Navbar />
    </article>
  );
};

export default OnlineBankWithdrawal;
