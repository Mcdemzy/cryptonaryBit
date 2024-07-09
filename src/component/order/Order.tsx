import { MdClose } from "react-icons/md";
import QRCode from "../../assets/qr-code.png";

const Order = () => {
  return (
    <>
      <article className="flex flex-col justify-center items-center h-screen bg-gray-900">
        <section className="bg-gray-800 w-[480px] p-4 rounded-lg">
          <div className="flex justify-between items-center text-white mb-5 pb-3 border-b-2 border-solid border-gray-700">
            <p className="text-xl">CBIT Stake</p>
            <MdClose className="text-2xl cursor-pointer" />
          </div>
          <div>
            <h1 className="text-2xl text-yellow-400 mb-8 font-bold">
              CryptonaryBit
            </h1>
            <div className="flex gap-2 relative w-full mb-6">
              <p className="text-3xl font-bold text-white">BTCUSDT</p>
              <span className="bg-green-600 p-1 rounded text-xs absolute top-0 right-0">
                Long 70.0X
              </span>
            </div>
            <div>
              <span className="text-gray-400 font-medium text-lg">ROI</span>
              <h1 className="mt-1 text-5xl font-bold text-green-500">
                +98.31%
              </h1>
            </div>
            <div className="mt-4">
              <span className="text-gray-400">Entry Price</span>
              <p className="text-2xl text-white">67,895.16</p>
            </div>
            <div className="mt-2">
              <span className="text-gray-400">Current Price</span>
              <p className="text-2xl text-white">68,884.90</p>
            </div>
          </div>
        </section>
        <div className="bg-white w-[480px] rounded-bl-2xl rounded-br-2xl flex justify-between p-4 mt-2">
          <div>
            <p className="text-lg font-medium">
              Join and claim over $5,000 <br /> in bonuses!
            </p>
            <h1 className="text-xl font-semibold">Referral Code: 0EWW6N</h1>
          </div>
          <img src={QRCode} width={100} alt="QR Code" />
        </div>
      </article>
    </>
  );
};

export default Order;
