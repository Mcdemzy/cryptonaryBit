import { useState } from "react";
import { BiBell } from "react-icons/bi";

import Flag from "../../assets/flag.png";
import "./wallet.css";
import { IoIosArrowDown } from "react-icons/io";
import {
  // BsBoxArrowInDownLeft,
  BsBoxArrowUpRight,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { BiHide } from "react-icons/bi";
import { IoMdStopwatch } from "react-icons/io";

import CryptoIcon1 from "../../assets/crypto1.png";
// import CryptoIcon2 from "../../assets/crypto2.png";
// import CryptoIcon3 from "../../assets/crypto3.png";
// import CryptoIcon4 from "../../assets/crypto4.png";
// import CryptoIcon5 from "../../assets/crypto5.png";
// import CryptoIcon6 from "../../assets/crypto6.png";
// import CryptoIcon7 from "../../assets/crypto7.png";
import { AiOutlineClose } from "react-icons/ai";

const Wallet = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <section className="wallet__component">
        <div className="flex justify-between pt-[16px] p-[10px] bg-[#121A25]">
          <h1 className="text-[1.7rem] font-[700] text-white">Wallet </h1>

          <div className="flex  mt-[10px] gap-2 justify-center">
            <a href="">
              <BiBell className="bg-[#222A37] p-[6px] text-[2.5rem] rounded-full text-white" />
            </a>
            <a href="">
              <BsThreeDotsVertical className="text-[2rem] text-white" />
            </a>
          </div>
        </div>

        <div className="wallet__flag">
          <img src={Flag} alt="" width={48} />
          <span>NGN</span>
          <IoIosArrowDown className="wallet__icon" />
        </div>

        <div className="">
          <h3 className="choose__wallet">Choose Wallet</h3>
          <div className="wallet__container">
            <p>Crypto</p>
            <p>Fiat</p>
          </div>
        </div>

        <>
          {" "}
          <div className="wallet__details-container">
            <div className="wallet__details">
              <img src={CryptoIcon1} alt="" />
              <div>
                <p className="text-[#707579] text-[1rem]">
                  Bitcoin Cash Wallet
                </p>
                <p className="flex items-center gap-4 text-[1.3rem] ">
                  BNB *.** <BiHide />
                </p>
                <p className="text-[#707579] text-[14px] mt-3">
                  ~ ₦ 0.00 ~ $ 0.00
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center text-[1.5rem]">
              <IoMdStopwatch />
            </div>
            <div onClick={toggleModal} className="wallet__links">
              <div className="flex flex-col justify-center items-center">
                <BsBoxArrowUpRight className="wallet__links-icon" />
                <span>Deposit</span>
              </div>
            </div>
          </div>
        </>
      </section>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Send Bitcoin</h2>
            <div className="modal-container">
              <img src={CryptoIcon1} width={48} alt="" />

              <div className="bitcoin__address-container">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi, labore.
                </p>
              </div>

              {/* <div>
                <a href="">Click here</a>
              </div> */}
            </div>
            <button className="close-modal" onClick={toggleModal}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Wallet;
