import { useState } from "react";
import "./modal.css";
import { AiOutlineClose } from "react-icons/ai";
import CryptoIcon1 from "../../assets/crypto1.png";

export default function Modal() {
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
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

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
}
