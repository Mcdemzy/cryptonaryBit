import "../withdraw/withdrawal.css";
import CryptoIcon3 from "../../assets/crypto3.png";
import CryptoIcon7 from "../../assets/crypto8.png";

import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

const Deposit = () => {
  const paymentMethods = [
    {
      name: "BTC Deposit",
      processingTime: "Instant - 1 day",
      fee: "0%",
      limits: "4 - 100,000 USD",
      icon: CryptoIcon3,
      recommended: true,
      link: "/btc-deposit",
    },
    {
      name: "Tether (USDT TRC20) Deposit",
      processingTime: "Instant - 1 day",
      fee: "0%",
      limits: "2 - 100,000 USD",
      icon: CryptoIcon7,
      recommended: true,
      link: "/usdt-deposit",
    },
  ];

  return (
    <article>
      {" "}
      <section className="withdrawal-section">
        <h1 className="withdrawal-title">Deposit</h1>
        <p className="withdrawal-subtitle">All payment methods</p>
        <div className="withdrawal-grid">
          {paymentMethods.map((method, index) => (
            <Link to={method.link}>
              <div key={index} className="withdrawal-card">
                <div className="withdrawal-card-header">
                  <div className="withdrawal-card-title">
                    <img
                      src={method.icon}
                      alt={`${method.name} icon`}
                      className="withdrawal-icon"
                    />
                    <h2 className="withdrawal-method-name">{method.name}</h2>
                  </div>
                  {method.recommended && (
                    <span className="withdrawal-recommended">Recommended</span>
                  )}
                </div>
                <p className="withdrawal-info">
                  <span className="withdrawal-info-label">
                    Processing time:
                  </span>{" "}
                  {method.processingTime}
                </p>
                <p className="withdrawal-info">
                  <span className="withdrawal-info-label">Fee:</span>{" "}
                  {method.fee}
                </p>
                <p className="withdrawal-info">
                  <span className="withdrawal-info-label">Limits:</span>{" "}
                  {method.limits}
                </p>
              </div>
            </Link>
          ))}
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
      </section>
      <Navbar />
    </article>
  );
};

export default Deposit;
