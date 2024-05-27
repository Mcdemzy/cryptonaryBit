import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./navbar.css";
import { SignInButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
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
    setIsSubDropdownOpen((prevState) => !prevState);
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
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="text-white self-center text-[1.25rem] font-medium whitespace-nowrap dark:text-white">
              CryptonaryBit
            </span>
          </div>
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
                <Link
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
                </Link>
                <Link
                  to="/etf"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setIsSubDropdownOpen(false)}
                >
                  ETF Tracker
                </Link>
                <Link
                  to="/airdrops"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setIsSubDropdownOpen(false)}
                >
                  Airdrops
                </Link>
              </div>
            )}
            <Link to="/products" className="text-white hover:text-blue-500">
              Products
            </Link>
            <Link to="/contactus" className="text-white hover:text-blue-500">
              Contact Us
            </Link>
            <Link to="/about" className="text-white hover:text-blue-500">
              About Us
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-[#0d141c] text-[1.125rem] font-[500] rounded-xl flex justify-center items-center p-3 m-[auto] bg-[#ffcc00] hover:bg-[#ffdd00] transition duration-300 ease-in-out">
              <SignInButton forceRedirectUrl="/dashboard" />
            </div>
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
          <div className="flex items-center space-x-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold">
              CryptonaryBit
            </span>
          </div>
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
              <Link
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
              </Link>
              <Link
                to="/etf"
                className="hover:text-blue-500"
                onClick={() => setIsSubDropdownOpen(false)}
              >
                ETF Tracker
              </Link>
              <Link
                to="/airdrops"
                className="hover:text-blue-500"
                onClick={() => setIsSubDropdownOpen(false)}
              >
                Airdrops
              </Link>
            </div>
          )}
          <Link to="/products" className="px-4 py-2 hover:text-blue-500">
            Products
          </Link>
          <Link to="/contactus" className="px-4 py-2 hover:text-blue-500">
            Contact Us
          </Link>
          <Link to="/about" className="px-4 py-2 hover:text-blue-500">
            About Us
          </Link>
          <div className="cursor-pointer w-[90%] text-[1.25rem] font-[500] rounded-xl flex justify-center items-center p-3 m-[auto] bg-[#ffcc00] hover:bg-[#ffdd00] transition duration-300 ease-in-out">
            <SignInButton forceRedirectUrl="/dashboard" />
          </div>
        </div>
      </nav>

      {/* Content Margin Adjustment */}
      <div className={`${isMobileNavVisible ? "mt-16" : ""}`}></div>
    </article>
  );
};

export default Navbar;
