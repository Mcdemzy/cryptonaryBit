import React from "react";
import { IoClose } from "react-icons/io5";
import User from "../../assets/user.png";

type AccountModalProps = {
  onClose: () => void;
};

const AccountModal: React.FC<AccountModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <h2 className="text-xl font-semibold">Profile details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-6 flex items-center space-x-4">
            <img
              src={User}
              alt="User"
              className="w-16 h-16 rounded-full border border-gray-300"
            />
            <div>
              <h3 className="text-xl font-semibold">Adeyemo Ademola</h3>
              <button className="text-blue-500 hover:text-blue-700">
                Update profile
              </button>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700">Username</h4>
            <div className="flex justify-between items-center">
              <p className="text-gray-900">gheist</p>
              <button className="text-blue-500 hover:text-blue-700">
                Update username
              </button>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700">
              Email addresses
            </h4>
            <div className="flex justify-between items-center">
              <p className="text-gray-900">
                adeyemoademola12@gmail.com{" "}
                <span className="text-gray-500">(Primary)</span>
              </p>
              <button className="text-blue-500 hover:text-blue-700">
                + Add email address
              </button>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-700">
              Connected accounts
            </h4>
            <div className="flex justify-between items-center">
              <p className="text-gray-900">
                Google - adeyemoademola12@gmail.com
              </p>
              <button className="text-blue-500 hover:text-blue-700">
                Connect account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
