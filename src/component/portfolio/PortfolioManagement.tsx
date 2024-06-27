import { SignInButton } from "@clerk/clerk-react";
import FAQ from "../landingpage/components/FAQ";
import Footer from "../landingpage/components/Footer";
import Navbar from "../landingpage/components/Navbar";
import { Link } from "react-router-dom";

const PortfolioManagement = () => {
  return (
    <>
      <Navbar />
      {/* Section header */}
      <section
        className="w-full h-[500px] flex justify-start items-center md:p-20 bg-blue-200"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/bgpfm.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-fit flex-wrap p-4 space-y-4 py-2 flex justify-center  flex-col">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Trade Crypto <br /> Swap Free
          </h2>
          <p className="text-lg text-white">
            Trade popular cryptocurrencies through our social trading or
            portfolio management accounts – each with unique benefits and
            features.
          </p>
          <div className="flex flex-wrap gap-y-4 flex-row justify-start items-center gap-x-5">
            <Link to="/signup">
              <button className="w-fit sm:w-[180px] h-[60px] rounded-lg p-2 px-4 bg-primary text-white text-xl">
                Register
              </button>
            </Link>

            <Link to="/login">
              <button className="w-fit sm:w-40 h-[60px] rounded-lg p-2 px-4 bg-gray-200">
                Try Free Demo
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Open account and trade crypto */}
      <h1 className="text-center text-4xl font-semibold my-14">
        Open an account and trade crypto
      </h1>
      <section className="w-[90%] gap-y-10  my-4 p-2 flex  flex-col md:flex-row justify-between m-auto items-center">
        <div className="flex flex-col gap-y-6 space-y-8 w-full  md:w-[50%] ">
          <div>
            <h1 className="font-bold text-3xl text-black">
              Access the growing crypto market
            </h1>
            <p className="text-lg font-thin">
              through derivatives and enjoy the ability to capitalize on crypto
              price movements without needing to own the underlying asset.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-3xl text-black">
              Trade all available cryptocurrencies
            </h1>
            <p className="text-lg font-thin">
              completely swap-free and hold yourcrypto trading positions at no
              extra cost.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-3xl text-black">
              Leverage proprietary trading features
            </h1>
            <p className="text-lg font-thin">
              to strengthenyour positions and give your strategy a unique
              advantage in a dynamic market.
            </p>
          </div>
        </div>
        <div
          className=" w-full md:w-[45%] h-[400px] rounded-md"
          style={{
            backgroundImage: "url(/pfmbg2.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </section>
      {/* why trade crypto with cryptonary bit */}
      <section className="w-full mt-2 p-4 md:p-20">
        <h2 className="text-center text-2xl md:text-4xl">
          Why trade crypto with CryptonaryBit
        </h2>
        <p className="mt-3 text-center w-full md:w-[50%] m-auto">
          From Bitcoin to Ethereum, Litecoin, and more, you can trade
          cryptocurrency price movements against the US dollar with
          better-than-market conditions
        </p>
        <section className="flex justify-between gap-y-4 md:flex-row flex-col flex-wrap w-full mt-8">
          {/* card 1 */}
          <div className="space-y-4 flex flex-col p-4 w-full md:w-[30%] border-2 md:h-[250px] rounded-lg">
            <div
              className="w-20 rounded-md h-20  ml-auto"
              style={{
                backgroundImage: "url(/trade1.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mt-20"></div>
            <div className="mt-20">
              <p className="font-bold text-lg">Instant withdrawals</p>
              <p>
                Simplify withdrawals for quick access to your funds. Choose your
                favorite payment method, make a withdrawal request, and enjoy
                instant approval.¹
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="space-y-4 flex flex-col p-4  border-2  w-full md:w-[30%] md:h-[250px] rounded-lg">
            <div
              className="w-20 rounded-md h-20  ml-auto"
              style={{
                backgroundImage: "url(/trade2.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mt-20"></div>
            <div className="mt-20">
              <p className="font-bold text-lg">Swap-free trading</p>
              <p>
                Keep your online trades running overnight with 0 charges,
                whether you are buying or shorting your cryptocurrency of
                choice.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="space-y-4 flex flex-col p-4  border-2  w-full md:w-[30%] md:h-[250px] rounded-lg">
            <div
              className="w-20 rounded-md h-20 ml-auto"
              style={{
                backgroundImage: "url(/trade3.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mt-20"></div>
            <div className="mt-20">
              <p className="font-bold text-lg">Stop Out Protection</p>
              <p>
                Enjoy a unique market protection feature that strengthens your
                positions and helps delay or avoid stop outs, particularly
                during increased volatility.
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* Elevate your crypto trading strategies */}
      <section className="w-full p-4 md:p-20">
        <h2 className="text-center text-2xl md:text-4xl">
          Elevate your crypto trading strategies
        </h2>
        <p className="mt-3 text-center w-full md:w-[50%] m-auto">
          Explore crypto trading strategies, analysis and techniques to gain an
          advantage and stay ahead of the curve with our detailed trading
          guides.
        </p>
        <section className="flex justify-between gap-y-4 md:flex-row flex-col flex-wrap w-full mt-8">
          {/* card 1 */}
          <div className="space-y-4 flex flex-col  w-full md:w-[33%] border-2 md:h-[420px] rounded-lg">
            <div
              className="w-full rounded-md h-64 bg-black "
              style={{
                backgroundImage: "url(/elevate1.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mt-20"></div>
            <div className="mt-20 p-4">
              {/* <p className="font-bold text-lg ">Instant withdrawals</p> */}
              <p className="text-xl">
                Mastering the art of day trading: strategies, tips and mistakes
                to avoid
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="space-y-4 flex flex-col  w-full md:w-[33%] border-2 md:h-[420px] rounded-lg">
            <div
              className="w-full rounded-md h-64 bg-black "
              style={{
                backgroundImage: "url(/elevate2.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mt-20"></div>
            <div className="mt-20 p-4">
              {/* <p className="font-bold text-lg ">Instant withdrawals</p> */}
              <p className="text-xl">
                Margin trading tips and strategies every trader should know.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="space-y-4 flex flex-col  w-full md:w-[33%] border-2 md:h-[420px] rounded-lg">
            <div
              className="w-full rounded-md h-64 bg-black "
              style={{
                backgroundImage: "url(/elevate3.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mt-20"></div>
            <div className="mt-20 p-4">
              {/* <p className="font-bold text-lg ">Instant withdrawals</p> */}
              <p className="text-xl">
                How to use MACD indicator to enhance your trading skills.
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* faq */}
      <FAQ />
      {/* section trade 24/7*/}
      <section className="w-full mt-2 mb-20 ">
        {/* section image with card on overlay */}
        <section
          className="border-2 w-full h-[270px] justify-center mt-8 flex"
          style={{
            backgroundImage: "url(/yellowflare.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-[90%] bg-[#070e20]  md:h-[200px] mt-auto -my-20 rounded-lg shadow-md p-4 flex flex-col md:flex-row justify-center items-center md:justify-between">
            <div className="p-4 w-full mdw-[70%] flex flex-col justify-center">
              <h2 className=" text-2xl font-bold text-white">
                Trade 24/7 crypto
              </h2>
              <h2 className="text-gray-200 text-center md:text-start">
                Capitalize on the world’s top cryptocurrency pairs.
              </h2>
            </div>
            <div className="w-full md:w-[30%] flex justify-center items-center gap-x-5">
              <Link to="/signup">
                <button className="w-36 rounded-lg p-2 px-4 bg-primary">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="w-36  rounded-lg p-2 px-4 bg-gray-200">
                  Try Free Demo
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
      {/* footer */}
      <footer className="mt-4">
        <Footer />
      </footer>
    </>
  );
};
export default PortfolioManagement;
