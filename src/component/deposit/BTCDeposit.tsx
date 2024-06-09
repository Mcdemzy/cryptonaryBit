import { useState } from "react";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./btcdeposit.css";

const BTCDeposit = () => {
  const [showAddress, setShowAddress] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [depositAmount, setDepositAmount] = useState<string>("");

  const handleContinue = () => {
    setShowAddress(true);
  };

  const handleCopyAddress = () => {
    const address = "bc1qh3s2ct457njk4chq04hjdfh76w802arcxaexzy";
    navigator.clipboard.writeText(address);
    setPopupMessage("Bitcoin Wallet Address copied!");

    setTimeout(() => {
      setPopupMessage("");
    }, 750);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepositAmount(event.target.value);
  };

  const isContinueButtonEnabled =
    parseFloat(depositAmount) > 0.0001 && parseFloat(depositAmount) <= 10;

  return (
    <article className="bg-[#060d17]">
      <section className="btc-deposit-section pb-[50px]">
        <div className="deposit-header">
          <h1 className="title">Bitcoin (BTC) Deposit</h1>
          <Link to="/deposit" className="back-link">
            See all payment methods
          </Link>
        </div>

        {!showAddress ? (
          <div className="deposit-form">
            <div className="form-group">
              <label htmlFor="payment-method">Payment method</label>
              <select id="payment-method" className="form-control" disabled>
                <option>Bitcoin (BTC)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="to-account">To account</label>
              {/* <select id="to-account" className="form-control" disabled>
                <option>Bitcoin (BTC) - 0.00000000 BTC</option>
              </select> */}
              <input
                className="form-control"
                type="number"
                placeholder="0.00000000 BTC"
                required
                min={0.0000000008}
                max={1}
                value={depositAmount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="info-box">
              <p>
                Deposit processing time depends on the limit you set when making
                a transfer. Bitcoin deposits will be credited to your Exness BTC
                wallet and can be easily transferred to any trading account
                within your Personal Area.
              </p>
            </div>
            <button
              className="continue-btn"
              onClick={handleContinue}
              disabled={!isContinueButtonEnabled}
            >
              Continue
            </button>
          </div>
        ) : (
          <div className="deposit-form">
            <div className="form-group">
              <label htmlFor="payment-method">Payment method</label>
              <select id="payment-method" className="form-control" disabled>
                <option>Bitcoin (BTC)</option>
              </select>
            </div>
            <div className="info-box">
              <p>
                To deposit funds, make a bitcoin transfer to the BTC-wallet
                shown below. Copy wallet address or scan QR code with your
                camera.
              </p>
            </div>
            <div className="form-group">
              <label className="btc-deposit-address-text">
                Your unique Bitcoin wallet address
              </label>
              <div className="btc-deposit-address-box">
                <p>bc1qh3s2ct457njk4chq04hjdfh76w802arcxaexzy</p>
                <button className="btc-copy-button" onClick={handleCopyAddress}>
                  Copy address
                </button>
              </div>
              <QRCode
                value="bc1qh3s2ct457njk4chq04hjdfh76w802arcxaexzy"
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
            <Link to="/faq">Find out more about crypto payments</Link>
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

export default BTCDeposit;