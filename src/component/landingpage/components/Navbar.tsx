import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  // const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
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

  useEffect(() => {
    if (isMobileNavVisible) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [isMobileNavVisible]);

  // const toggleMainDropdown = () => {
  //   setIsMainDropdownOpen((prevState) => !prevState);
  // };

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
      <nav className="bg-black border-gray-200 dark:bg-black dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CryptonaryBit
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 relative">
            <button
              onClick={toggleSubDropdown}
              className="flex items-center text-white hover:text-blue-500"
            >
              Tools <FaChevronDown className="ml-1" />
            </button>
            {isSubDropdownOpen && (
              <div className="absolute top-full mt-2 left-0 bg-black border-gray-700 text-white rounded-md shadow-lg w-48 z-50">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setIsSubDropdownOpen(false)}
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setIsSubDropdownOpen(false)}
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setIsSubDropdownOpen(false)}
                >
                  Earnings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setIsSubDropdownOpen(false)}
                >
                  Sign out
                </a>
              </div>
            )}
            <a href="#" className="text-white hover:text-blue-500">
              Products
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              Contact Us
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              About Us
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signup" className="text-white hover:text-blue-500">
              Subscribe
            </Link>
            <Link to="/signin" className="text-white hover:text-blue-500">
              Login
            </Link>
          </div>
          <button
            onClick={handleMenuClick}
            className="md:hidden text-white hover:text-gray-500"
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
          <button onClick={handleCloseClick}>
            <IoClose className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col space-y-4 mt-4">
          <button
            onClick={toggleSubDropdown}
            className="flex items-center justify-between w-full px-4 py-2 text-left"
          >
            Tools <FaChevronDown />
          </button>
          {isSubDropdownOpen && (
            <div className="flex flex-col space-y-2 pl-8">
              <a
                href="#"
                className="hover:text-blue-500"
                onClick={() => setIsSubDropdownOpen(false)}
              >
                Dashboard
              </a>
              <a
                href="#"
                className="hover:text-blue-500"
                onClick={() => setIsSubDropdownOpen(false)}
              >
                Settings
              </a>
              <a
                href="#"
                className="hover:text-blue-500"
                onClick={() => setIsSubDropdownOpen(false)}
              >
                Earnings
              </a>
              <a
                href="#"
                className="hover:text-blue-500"
                onClick={() => setIsSubDropdownOpen(false)}
              >
                Sign out
              </a>
            </div>
          )}
          <a href="#" className="px-4 py-2 hover:text-blue-500">
            Products
          </a>
          <a href="#" className="px-4 py-2 hover:text-blue-500">
            Contact Us
          </a>
          <a href="#" className="px-4 py-2 hover:text-blue-500">
            About Us
          </a>
          <Link to="/signup" className="px-4 py-2 hover:text-blue-500">
            Subscribe
          </Link>
          <Link to="/signin" className="px-4 py-2 hover:text-blue-500">
            Login
          </Link>
        </div>
      </nav>

      {/* Content Margin Adjustment */}
      <div className={`${isMobileNavVisible ? "mt-16" : ""}`}></div>
    </article>
  );
};

export default Navbar;
