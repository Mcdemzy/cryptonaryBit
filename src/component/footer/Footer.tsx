const Footer = () => {
  return (
    <footer className="withdrawal-footer mt-[40px]">
      <p className="footer-text">
        CryptonaryBit (SC) LTD is a Securities Dealer registered in Seychelles
        with registration number 8423606-1 and authorised by the Financial
        Services Authority (FSA) with licence number SD025. The registered
        office of CryptonaryBit (SC) LTD is at 9A CT House, 2nd floor,
        Providence, Mahe, Seychelles.
      </p>
      <p className="footer-text">
        The information on this website may only be copied with the express
        written permission of CryptonaryBit. General Risk Warning: CFDs are
        leveraged products. Trading in CFDs carries a level of risk thus may not
        be appropriate for all investors. The investment value can both increase
        and decrease and the investors may lose all their invested capital.
        Under no circumstances shall the Company have any liability to any
        person or entity for any loss or damage in whole or part caused by,
        resulting from, or relating to any transactions related to CFDs.{" "}
        <a href="#">Learn more</a>
      </p>
      <p className="footer-text">
        CryptonaryBit complies with the Payment Card Industry Data Security
        Standard (PCI DSS) to ensure your security and privacy. We conduct
        regular vulnerability scans and penetration tests in accordance with the
        PCI DSS requirements for our business model.
      </p>
      <div className="footer-links">
        <a href="#">Privacy Agreement</a>
        <a href="#">Risk Disclosure</a>
        <a href="#">Preventing Money Laundering</a>
        <a href="#">Security instructions</a>
        <a href="#">Legal documents</a>
      </div>
      <p className="footer-contact">
        Email:{" "}
        <a href="mailto:info@CryptonaryBit.com">info@CryptonaryBit.com</a>
      </p>
      <p className="footer-copyright">&copy; 2008 - 2024. CryptonaryBit</p>
    </footer>
  );
};

export default Footer;
