import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsMobileNavVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSubDropdown = () => {
    setIsSubDropdownOpen((prevState) => {
      if (!prevState) {
        setIsProductsDropdownOpen(false);
      }
      return !prevState;
    });
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen((prevState) => {
      if (!prevState) {
        setIsSubDropdownOpen(false);
      }
      return !prevState;
    });
  };

  const handleMenuClick = () => {
    setIsMobileNavVisible(true);
  };

  const handleCloseClick = () => {
    setIsMobileNavVisible(false);
  };

  return (
    <article>
      {/* Main Navbar */}
      <nav className="bg-[#0d141c] border-gray-200 dark:bg-black dark:border-gray-700 fixed w-full z-50">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6 py-2.5">
          <Link to="/">
            <div className="flex items-center rtl:space-x-reverse">
              <img src="/logo.png" className="h-8" alt="Logo" />
              <h1 className="text-white self-center text-2xl font-medium whitespace-nowrap dark:text-white">
                ryptonaryBit
              </h1>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-4 relative">
            <button
              onClick={toggleSubDropdown}
              className="flex items-center text-white hover:text-blue-500"
              aria-expanded={isSubDropdownOpen}
              aria-controls="tools-dropdown"
            >
              Tools <FaChevronDown className="ml-1" />
            </button>
            {isSubDropdownOpen && (
              <div
                id="tools-dropdown"
                className="absolute top-full mt-2 left-0 bg-black border-gray-700 text-white rounded-md shadow-lg w-48 z-50"
              >
                {/* <Link
                  to="/charts"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setIsSubDropdownOpen(false)}
                >
                  Real-Time Charts
                </Link>
                <Link
                  to="/picks"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setIsSubDropdownOpen(false)}
                >
                  CryptonaryBit Picks
                </Link> */}
                <Link
                  to="/etf"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setIsSubDropdownOpen(false)}
                >
                  ETF Tracker
                </Link>
                <Link
                  to="/airdrop"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setIsSubDropdownOpen(false)}
                >
                  Airdrops
                </Link>
              </div>
            )}
            <button
              onClick={toggleProductsDropdown}
              className="flex items-center text-white hover:text-blue-500"
              aria-expanded={isProductsDropdownOpen}
              aria-controls="products-dropdown"
            >
              Products <FaChevronDown className="ml-1" />
            </button>
            {isProductsDropdownOpen && (
              <div
                id="products-dropdown"
                className="absolute top-full mt-2 left-0 bg-black border-gray-700 text-white rounded-md shadow-lg w-48 z-50"
              >
                <Link
                  to="/pmi"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setIsProductsDropdownOpen(false)}
                >
                  Portfolio Management
                </Link>
              </div>
            )}
            <Link to="/contact" className="text-white hover:text-blue-500">
              Contact Us
            </Link>
            <Link to="/about" className="text-white hover:text-blue-500">
              About Us
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <button className="text-[#0d141c] text-[1.125rem] font-[500] rounded-xl flex justify-center items-center p-3 m-[auto] bg-[#ffcc00] hover:bg-[#ffdd00] transition duration-300 ease-in-out">
                SignIn
              </button>
            </Link>
          </div>
          <button
            onClick={handleMenuClick}
            className="md:hidden text-white hover:text-gray-500"
            aria-label="Open mobile menu"
          >
            <HiOutlineMenu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full h-full bg-black text-white transform ${
          isMobileNavVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <Link to="/">
            <div className="flex items-center">
              <img src="/logo.png" className="h-8" alt="Logo" />
              <h1 className="self-center text-2xl font-semibold">
                ryptonaryBit
              </h1>
            </div>
          </Link>
          <button onClick={handleCloseClick} aria-label="Close mobile menu">
            <IoClose className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col space-y-4 mt-4">
          <button
            onClick={toggleSubDropdown}
            className="flex items-center justify-between w-full px-4 py-2 text-left"
            aria-expanded={isSubDropdownOpen}
            aria-controls="mobile-tools-dropdown"
          >
            Tools <FaChevronDown />
          </button>
          {isSubDropdownOpen && (
            <div
              id="mobile-tools-dropdown"
              className="flex flex-col space-y-2 pl-8"
            >
              {/* <Link
                to="/charts"
                className="hover:text-blue-500"
                onClick={() => setIsSubDropdownOpen(false)}
              >
                Real-Time Charts
              </Link>
              <Link
                to="/picks"
                className="hover:text-blue-500"
                onClick={() => setIsSubDropdownOpen(false)}
              >
                CryptonaryBit Picks
              </Link> */}
              <Link
                to="/etf"
                className="hover:text-blue-500"
                onClick={() => setIsSubDropdownOpen(false)}
              >
                ETF Tracker
              </Link>
              <Link
                to="/airdrop"
                className="hover:text-blue-500"
                onClick={() => setIsSubDropdownOpen(false)}
              >
                Airdrops
              </Link>
            </div>
          )}
          <button
            onClick={toggleProductsDropdown}
            className="flex items-center justify-between w-full px-4 py-2 text-left"
            aria-expanded={isProductsDropdownOpen}
            aria-controls="mobile-products-dropdown"
          >
            Products <FaChevronDown />
          </button>
          {isProductsDropdownOpen && (
            <div
              id="mobile-products-dropdown"
              className="flex flex-col space-y-2 pl-8"
            >
              <Link
                to="/pmi"
                className="hover:text-blue-500"
                onClick={() => setIsProductsDropdownOpen(false)}
              >
                Portfolio Management
              </Link>
              {/* <Link
                to="/product2"
                className="hover:text-blue-500"
                onClick={() => setIsProductsDropdownOpen(false)}
              >
                Product 2
              </Link>
              <Link
                to="/product3"
                className="hover:text-blue-500"
                onClick={() => setIsProductsDropdownOpen(false)}
              >
                Product 3
              </Link> */}
            </div>
          )}
          <Link to="/contact" className="px-4 py-2 hover:text-blue-500">
            Contact Us
          </Link>
          <Link to="/about" className="px-4 py-2 hover:text-blue-500">
            About Us
          </Link>
          <Link to="/login">
            <div className="cursor-pointer w-[90%] text-[1.25rem] font-[500] rounded-xl flex justify-center items-center p-3 m-[auto] bg-[#ffcc00] hover:bg-[#ffdd00] transition duration-300 ease-in-out">
              Sign in
            </div>
          </Link>
        </div>
      </nav>

      {/* Content Margin Adjustment */}
      <div className={`${isMobileNavVisible ? "mt-16" : ""}`}></div>
    </article>
  );
};

export default Navbar;
