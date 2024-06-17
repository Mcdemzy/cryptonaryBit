import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { IoIosArrowDown, IoMdStopwatch } from "react-icons/io";
import { BiHide, BiShow } from "react-icons/bi"; // Import BiShow for the visible eye icon
import { SiBetterstack } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "../navbar/Navbar";
import Flag2 from "../../assets/flag2.png";
import Flag3 from "../../assets/flag3.png";
import Flag4 from "../../assets/flag4.png";
import CryptoIcon1 from "../../assets/crypto1.png";
import CryptoIcon2 from "../../assets/crypto2.png";
import CryptoIcon3 from "../../assets/crypto3.png";
import CryptoIcon4 from "../../assets/crypto4.png";
import CryptoIcon5 from "../../assets/crypto5.png";
import CryptoIcon6 from "../../assets/crypto6.png";
import CryptoIcon7 from "../../assets/crypto8.png";
import "./wallet.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../footer/Footer";

// Conversion rates for demonstration purposes
const conversionRates: { [key in "USD" | "EUR" | "GBP"]: number } = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
};

type Wallet = {
  icon: string;
  name: string;
  symbol: string;
  approxValue: number;
  canStake?: boolean;
  minimum: number;
};

type Currency = {
  name: string;
  code: "USD" | "EUR" | "GBP";
  symbol: string;
  flag: string;
};

// Generate random values for the wallets
const generateRandomValue = () => Math.random() * 10000;

const wallets: Wallet[] = [
  {
    icon: CryptoIcon1,
    name: "Bitcoin Cash Wallet",
    symbol: "BCH",
    approxValue: generateRandomValue(),
    canStake: true,
    minimum: 0.5,
  },
  {
    icon: CryptoIcon2,
    name: "BNB Wallet",
    symbol: "BNB",
    approxValue: generateRandomValue(),
    canStake: true,
    minimum: 0.3,
  },
  {
    icon: CryptoIcon3,
    name: "Bitcoin Wallet",
    symbol: "BTC",
    approxValue: generateRandomValue(),
    canStake: true,
    minimum: 0.004,
  },
  {
    icon: CryptoIcon4,
    name: "Ethereum Wallet",
    symbol: "ETH",
    approxValue: generateRandomValue(),
    canStake: true,
    minimum: 0.06,
  },
  {
    icon: CryptoIcon5,
    name: "Solana Wallet",
    symbol: "SOL",
    approxValue: generateRandomValue(),
    canStake: true,
    minimum: 1.5,
  },
  {
    icon: CryptoIcon6,
    name: "Tron Wallet",
    symbol: "TRX",
    approxValue: generateRandomValue(),
    canStake: true,
    minimum: 2000,
  },
  {
    icon: CryptoIcon7,
    name: "USDT (TRC 20)",
    symbol: "USDT",
    approxValue: generateRandomValue(),
    canStake: true,
    minimum: 250,
  },
];

// Currency options
const currencies: Currency[] = [
  { name: "US Dollar", code: "USD", symbol: "$", flag: Flag2 },
  { name: "Euro", code: "EUR", symbol: "€", flag: Flag3 },
  {
    name: "British Pound",
    code: "GBP",
    symbol: "£",
    flag: Flag4,
  },
];

const Wallet = () => {
  const [modal, setModal] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  const [loading, setLoading] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    currencies[0]
  );
  const [balanceVisible, setBalanceVisible] = useState(true); // Add state for balance visibility
  const [convertedBalances, setConvertedBalances] = useState<{
    [key: string]: number;
  }>({}); // State for converted balances
  const navigate = useNavigate();

  useEffect(() => {
    // Convert balances to the selected currency when the selected currency changes
    const newBalances: { [key: string]: number } = {};
    wallets.forEach((wallet) => {
      newBalances[wallet.symbol] =
        wallet.approxValue * conversionRates[selectedCurrency.code];
    });
    setConvertedBalances(newBalances);
  }, [selectedCurrency]);

  const toggleModal = (wallet: Wallet | null) => {
    setSelectedWallet(wallet);
    setModal(!modal);
  };

  const handleStakeClick = (wallet: Wallet) => {
    if (!wallet) {
      toast.error("No wallet selected!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/stake", { state: { wallet } });
    }, 1000);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectCurrency = (currency: Currency) => {
    setSelectedCurrency(currency);
    setDropdownVisible(false);
  };

  const toggleBalanceVisibility = () => {
    setBalanceVisible(!balanceVisible);
  };

  return (
    <>
      <section className="wallet__component">
        <div className="flex justify-between pt-[16px] p-[10px] bg-[#121A25]">
          <h1 className="text-[1.7rem] font-[700] text-white">Wallet</h1>
          <div className="flex mt-[10px] gap-2 justify-center">
            <UserButton />
          </div>
        </div>
        <div className="wallet__flag" onClick={toggleDropdown}>
          <img
            src={selectedCurrency.flag}
            alt={selectedCurrency.name}
            width={48}
          />
          <span>{selectedCurrency.code}</span>
          <IoIosArrowDown className="wallet__icon" />
          {dropdownVisible && (
            <div className="dropdown">
              {currencies.map((currency) => (
                <div
                  key={currency.code}
                  className="dropdown-item"
                  onClick={() => selectCurrency(currency)}
                >
                  <img src={currency.flag} alt={currency.name} width={24} />
                  <span>{currency.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="">
          <h3 className="choose__wallet">Choose Wallet</h3>
          <div className="wallet__container">
            <p>Crypto</p>
            <p>Fiat</p>
          </div>
        </div>
        {wallets.map((wallet) => (
          <div key={wallet.symbol} className="wallet__details-container">
            <div className="wallet__details">
              <img src={wallet.icon} alt={wallet.name} />
              <div>
                <p className="text-[#707579] text-[1rem]">{wallet.name}</p>
                <p className="flex items-center gap-4 text-[1.3rem]">
                  {wallet.symbol}{" "}
                  {balanceVisible &&
                  convertedBalances[wallet.symbol] !== undefined
                    ? `${selectedCurrency.symbol} ${convertedBalances[
                        wallet.symbol
                      ].toFixed(2)}`
                    : "*.**"}{" "}
                  <span onClick={toggleBalanceVisibility}>
                    {balanceVisible ? <BiHide /> : <BiShow />}
                  </span>
                </p>
                <p className="text-[#707579] text-[14px] mt-3">
                  {balanceVisible &&
                  convertedBalances[wallet.symbol] !== undefined
                    ? `${selectedCurrency.symbol} ${convertedBalances[
                        wallet.symbol
                      ].toFixed(2)}`
                    : ""}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center text-[1.5rem]">
              <IoMdStopwatch />
            </div>
            <div className="wallet__links">
              {wallet.canStake && (
                <div
                  onClick={() => handleStakeClick(wallet)}
                  className={`flex flex-col justify-center items-center cursor-pointer ${
                    loading ? "disabled" : ""
                  }`}
                >
                  <SiBetterstack className="wallet__links-icon" />
                  <span>Stake</span>
                </div>
              )}
              {/* <div
                onClick={() => toggleModal(wallet)}
                className="flex flex-col justify-center items-center cursor-pointer"
              >
                <BsBoxArrowUpRight className="wallet__links-icon" />
                <span>Deposit</span>
              </div> */}
            </div>
          </div>
        ))}
        <Footer />
      </section>
      {modal && selectedWallet && (
        <div className="modal">
          <div onClick={() => toggleModal(null)} className="overlay"></div>
          <div className="modal-content">
            <h2>Send {selectedWallet.symbol}</h2>
            <div className="modal-container">
              <img
                src={selectedWallet.icon}
                width={48}
                alt={selectedWallet.name}
              />
              <div className="bitcoin__address-container">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi, labore.
                </p>
              </div>
            </div>
            <button className="close-modal" onClick={() => toggleModal(null)}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}
      <Navbar />
    </>
  );
};

export default Wallet;
