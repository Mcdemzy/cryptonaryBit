import { useState } from "react";
import { Link } from "react-router-dom";
import User from "../../assets/user.png";
import { FiSettings, FiLogOut } from "react-icons/fi";
import AccountModal from "./AccounModal";
// import "./header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsDropdownOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="bg-[#121A25] text-white fixed w-full z-50">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold">
            CryptonaryBit
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img src={User} alt="User" className="w-8 h-8 rounded-full" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b">
                  <span className="block text-sm font-semibold">
                    Adeyemo Ademola
                  </span>
                  <span className="block text-sm">gheist</span>
                </div>
                <button
                  onClick={openModal}
                  className="flex items-center px-4 py-2 w-full hover:bg-gray-200"
                >
                  <FiSettings className="mr-2" />
                  Manage account
                </button>
                <button
                  onClick={() => console.log("Sign out")}
                  className="flex items-center w-full px-4 py-2 hover:bg-gray-200"
                >
                  <FiLogOut className="mr-2" />
                  Sign out
                </button>
                <div className="px-4 py-2 border-t text-center text-sm text-gray-500">
                  Secured by{" "}
                  <span className="font-semibold">CryptonaryBit</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      {isModalOpen && <AccountModal onClose={closeModal} />}
    </>
  );
};

export default Header;
