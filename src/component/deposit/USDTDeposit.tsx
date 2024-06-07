import { useState } from "react";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./usdtdeposit.css";

const USDTDeposit = () => {
  const [showAddress, setShowAddress] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleContinue = () => {
    setShowAddress(true);
  };

  const handleCopyAddress = () => {
    const address = "0x4f5FDe7d1B9e04aEBa28c5cDa2D87E1beEc0a3Df"; // Example USDT wallet address
    navigator.clipboard.writeText(address);
    setPopupMessage("USDT Wallet Address copied!");

    setTimeout(() => {
      setPopupMessage("");
    }, 750);
  };

  return (
    <article className="bg-[#060d17]">
      <section className="usdt-deposit-section pb-[50px]">
        <div className="deposit-header">
          <h1 className="title">USDT Deposit</h1>
          <Link to="/deposit" className="back-link">
            See all payment methods
          </Link>
        </div>

        {!showAddress ? (
          <div className="deposit-form">
            <div className="form-group">
              <label htmlFor="payment-method">Payment method</label>
              <select id="payment-method" className="form-control" disabled>
                <option>USDT (Tether)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="to-account">To account</label>
              <select id="to-account" className="form-control" disabled>
                <option>USDT (Tether) - 0.00 USDT</option>
              </select>
            </div>
            <div className="info-box">
              <p>
                Deposit processing time depends on the limit you set when making
                a transfer. USDT deposits will be credited to your Exness USDT
                wallet and can be easily transferred to any trading account
                within your Personal Area.
              </p>
            </div>
            <button className="continue-btn" onClick={handleContinue}>
              Continue
            </button>
          </div>
        ) : (
          <div className="deposit-form">
            <div className="form-group">
              <label htmlFor="payment-method">Payment method</label>
              <select id="payment-method" className="form-control" disabled>
                <option>USDT (Tether)</option>
              </select>
            </div>
            <div className="info-box">
              <p>
                To deposit funds, make a USDT transfer to the USDT-wallet shown
                below. Copy wallet address or scan QR code with your camera.
              </p>
            </div>
            <div className="form-group">
              <label className="usdt-deposit-address-text">
                Your unique USDT wallet address
              </label>
              <div className="usdt-deposit-address-box">
                <p>0x4f5FDe7d1B9e04aEBa28c5cDa2D87E1beEc0a3Df</p>
                <button
                  className="usdt-copy-button"
                  onClick={handleCopyAddress}
                >
                  Copy address
                </button>
              </div>
              <QRCode
                value="0x4f5FDe7d1B9e04aEBa28c5cDa2D87E1beEc0a3Df"
                size={128}
              />
            </div>
            {/* <button className="continue-btn">Go to My Accounts</button> */}
            <Link to="/deposit">
              <button className="continue-btn">Change Deposit Method</button>
            </Link>
          </div>
        )}

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
            <Link to="/faq">Find out more about USDT payments</Link>
          </div>
        </div>

        <Footer />
      </section>
      <Navbar />

      {popupMessage && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </article>
  );
};

export default USDTDeposit;
