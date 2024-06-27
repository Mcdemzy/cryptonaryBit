import { useState } from "react";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./usdtdeposit.css";
import { Transactions } from "./BTCDeposit";
import { deposit } from "../../../utils/services";

const USDTDeposit = () => {
  const [showAddress, setShowAddress] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [depositAmount, setDepositAmount] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleUsdtDeposit = async (details: Transactions) => {
    try {
      setLoading(true);
      const res = await deposit(details);
      if (res.ok) {
        alert("Your USDT deposit is being processed");
        setLoading(false);
        setShowAddress(true);
      }
    } catch (error) {
      alert("deposit error please try again");
      setLoading(false);
      console.log(error);
    }
  };

  const handleContinue = () => {
    const details = {
      date: new Date().toISOString(),
      type: "Deposit",
      amount: parseFloat(depositAmount),
      status: "Pending",
      currency: "USDT",
    };
    handleUsdtDeposit(details);
  };

  const handleCopyAddress = () => {
    const address = "TLNpM6QvZ31i2HGCHfvoWnK9F7JaLrtACd"; // Example USDT wallet address
    navigator.clipboard.writeText(address);
    setPopupMessage("USDT Wallet Address copied!");

    setTimeout(() => {
      setPopupMessage("");
    }, 750);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepositAmount(event.target.value);
  };

  const isContinueButtonEnabled =
    parseFloat(depositAmount) >= 0.008 && parseFloat(depositAmount) <= 10000;

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
                <option>Tether (USDT TRC20)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="to-account">To account</label>
              <input
                className="form-control"
                type="number"
                placeholder="0.000 USDT"
                required
                min={0.008}
                max={10000}
                value={depositAmount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="info-box">
              <p>
                Deposit processing time depends on the limit you set when making
                a transfer. USDT deposits will be credited to your CryptonaryBit
                USDT wallet and can be easily transferred to any trading account
                within your Personal Area.
              </p>
            </div>
            <button
              className="continue-btn"
              onClick={handleContinue}
              disabled={!isContinueButtonEnabled}
            >
              {loading ? "loading...." : "deposit"}
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
                <p>TLNpM6QvZ31i2HGCHfvoWnK9F7JaLrtACd</p>
                <button
                  className="usdt-copy-button"
                  onClick={handleCopyAddress}
                >
                  Copy address
                </button>
              </div>
              <QRCode value="TLNpM6QvZ31i2HGCHfvoWnK9F7JaLrtACd" size={128} />
            </div>
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
