import { MdClose } from "react-icons/md";
import QRCode from "../../assets/qr-code.png";
const Order = () => {
  return (
    <>
      <article className="flex flex-col justify-center items-center h-screen">
        <section>
          Order
          <div>
            <p>P&L Share</p>
            <MdClose />
          </div>
          {/*  */}
          <div>
            <h1>CryptonaryBit</h1>
            <div>
              <p>BTCUSDT</p>
              <h1>Long 70.0X</h1>
            </div>
            <span>ROI</span>
            <h1>+98.31%</h1>

            {/*  */}
            <span>Entry Price</span>
            <p>67,895.16</p>
            <span>Current Price</span>
            <p>68,884.90</p>
          </div>
          <div>
            <p>Join and claim over $5000 in bonuses</p>
            <h1>Referral Code: 0EWW6N</h1>
            <img src={QRCode} width={100} alt="" />
          </div>
        </section>
      </article>
    </>
  );
};

export default Order;
