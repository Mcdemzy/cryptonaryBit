import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../context/authContext";

const AccountBalance = () => {
  const { user } = useAuthContext();
  return (
    <div className="p-4 w-full max-w-[90vw] mt-8 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div className="flex flex-wrap items-center space-x-2">
          <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded mb-2 sm:mb-0">
            Real
          </span>
          <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded mb-2 sm:mb-0">
            MT5
          </span>
          <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded mb-2 sm:mb-0">
            Standard
          </span>
          <span className="text-gray-700 font-semibold"># 600154598</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
         {user?.accountBalance}{" "}USD
        </div>
        <div className="flex space-x-2 sm:space-x-4">
          <Link to="/deposit">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
              Deposit
            </button>
          </Link>
          <Link to="/withdrawal">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
              Withdraw
            </button>
          </Link>
          <Link to="/wallet">
            <button className="px-4 py-2 bg-yellow-500 text-gray-900 rounded">
              Stake
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-yellow-50 p-2 rounded-lg flex items-center text-yellow-700">
        <span className="mr-2">⚠️</span>
        <span>Fund your account to start trading</span>
      </div>
    </div>
  );
};

export default AccountBalance;
