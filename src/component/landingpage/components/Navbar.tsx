import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FaChevronDown } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsMobileNavVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileNavVisible) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [isMobileNavVisible]);

  const handleMenuClick = () => {
    setIsMobileNavVisible(true);
  };

  const handleCloseClick = () => {
    setIsMobileNavVisible(false);
  };

  return (
    <article>
      {/* Main Navbar */}
      <nav className="navbar__container">
        <div className="nav-logo__section">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <h1>CryptonaryBit</h1>
        </div>

        <div className="nav-links__section">
          <p className="flex justify-center items-center gap-2">
            Tools
            <FaChevronDown />
          </p>
          <p>Products</p>
          <p>Contact Us</p>
          <p>About Us</p>
        </div>

        <div className="nav-auth__section">
          <div className="nav__auth-subscribe">Subscribe</div>
          <div className="nav__auth-login">Login</div>
        </div>

        <HiOutlineMenu className="nav-menu" onClick={handleMenuClick} />
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`mobile-navbar__container ${
          isMobileNavVisible ? "visible" : ""
        }`}
      >
        <div className="mobile-nav__logo-section">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <h1>CryptonaryBit</h1>
        </div>

        <div className="mobile-nav-links__section">
          <p className="flex items-center gap-1">
            Tools
            <FaChevronDown />
          </p>
          <p>Products</p>
          <p>Contact Us</p>
          <p>About Us</p>
        </div>

        <div className="mobile-nav-auth__section">
          <Link to="/signup" className="mobile-nav__auth-subscribe">
            Subscribe
          </Link>
          <Link to="/signin" className="mobile-nav__auth-login">
            Login
          </Link>
        </div>
        <IoClose className="mobile-nav__close" onClick={handleCloseClick} />
      </nav>
    </article>
  );
};

export default Navbar;
