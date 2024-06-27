import { Link } from "react-router-dom";
import Footer from "../landingpage/components/Footer";
import Navbar from "../landingpage/components/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      {/* Section why choose us */}
      <section
        className="w-full h-[500px]  flex justify-start items-center md:p-20 bg-blue-200"
        style={{
          backgroundImage: "url(/aboutbg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-fit flex-wrap p-4 space-y-4 py-2 flex justify-center  flex-col">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Why choose CryptonaryBit
          </h2>
          <p className="text-lg">
            Give your trading strategy the advantage with our better-than-market{" "}
            <br /> conditions.
          </p>
          <div className="flex flex-wrap gap-y-4 flex-row justify-start items-center gap-x-5">
            <Link to="/signup">
              <button className="w-fit sm:w-40 rounded-lg p-2 px-4 bg-primary">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="w-fit sm:w-40  rounded-lg p-2 px-4 bg-gray-200">
                Try Free Demo
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Section take trading to the next level */}
      <section className="w-full mt-2 p-4 md:p-20">
        <h2 className="text-center text-2xl md:text-4xl">
          Take your trading to the next level
        </h2>
        <p className="mt-3 text-center">
          Our leading market conditions, trading features and proprietary
          protections <br /> give your strategy the advantage it deserves
        </p>
        <section className="flex justify-between gap-y-4 md:flex-row flex-col flex-wrap w-full mt-4">
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
              <p className="font-bold text-lg">Low and stable spreads</p>
              <p>
                Trade with tight, predictable spreads on all instruments, even
                in times of volatility.
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
              <p className="font-bold text-lg">Stop Out Protection</p>
              <p>
                Experience 30% fewer stop outs with a unique protection feature
                designed to delay or completely avoid stop outs
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
              <p className="font-bold text-lg">No overnight fees</p>
              <p>
                Hold overnight positions for free on all FX majors, most FX
                minors, gold, crypto and indices.
              </p>
            </div>
          </div>
          {/* card 4 */}
          <div className="space-y-4 flex flex-col p-4  border-2  w-full md:w-[30%] md:h-[250px] rounded-lg">
            <div
              className="w-20 rounded-md h-20 ml-auto"
              style={{
                backgroundImage: "url(/trade4.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mt-20"></div>
            <div className="mt-20">
              <p className="font-bold text-lg">Ultra-fast execution</p>
              <p>
                Execute trades in milliseconds on both MetaTrader platforms and
                proprietary CryptonaryBit Terminals.
              </p>
            </div>
          </div>
          {/* card 5 */}
          <div className="space-y-4 flex flex-col p-4  border-2  w-full md:w-[30%] md:h-[250px] rounded-lg">
            <div
              className="w-20 rounded-md h-20 ml-auto"
              style={{
                backgroundImage: "url(/trade5.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mt-20"></div>
            <div className="mt-20">
              <p className="font-bold text-lg">0% stop out level</p>
              <p>
                Stay in the markets for longer with a 0% margin level stop out
                on all accounts
              </p>
            </div>
          </div>
          {/* Card 6 */}
          <div className="space-y-4 flex flex-col p-4] border-2  w-full md:w-[30%] md:h-[250px] rounded-lg">
            <div
              className="w-20 rounded-md h-20 ml-auto"
              style={{
                backgroundImage: "url(/trade6.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="mt-20"></div>
            <div className="mt-20">
              <p className="font-bold text-lg">Customizable leverage</p>
              <p>
                Modify your leverage to suit your risk management strategy with
                flexible leverage up to 1:unlimited.
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* Section your money is yours */}
      <section className="w-full mb-20 mt-2 md:p-20">
        <h2 className="text-center text-2xl md:text-4xl">
          Your money is yours. Period.
        </h2>
        <p className="mt-3 text-center">
          Access your funds when you want, how you want with no additional fees.
        </p>
        {/* section image with card on overlay */}
        <section
          className="rounded-sm w-full h-[450px] justify-center mt-8 flex"
          style={{
            backgroundImage: "url(/team.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <aside className="md:flex hidden w-[90%] md:flex-row flex-col m-auto flex justify-center items-center mt-auto mb-auto md:mt-auto md:-my-28 rounded-lg">
            {/* card 1 */}
            <div className="bg-gray-200 border-r border-r-gray-400 space-y-4  flex flex-col p-4 py-5 w-full md:w-[35%]  rounded-lg ">
              <div className="w-10 rounded-md h-10  flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-6 h-6 bi bi-arrow-up-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                  />
                </svg>
              </div>
              <div className="mt-20"></div>
              <div className="mt-20">
                <p className="font-bold text-lg">Instant withdrawals¹</p>
                <p>
                  Withdrawals are processed in seconds, giving you access to
                  your funds, even on weekends.
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="bg-gray-200 space-y-4 border-r border-r-gray-400 flex flex-col p-4 py-5 w-full md:w-[35%]  rounded-lg">
              <div className="w-10 rounded-md h-10 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-6 h-6 bi bi-0-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895" />
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                </svg>
              </div>
              <div className="mt-20"></div>
              <div className="mt-20">
                <p className="font-bold text-lg">No transaction fees²</p>
                <p>
                  We pay your third-party transaction fees so you don't have to.
                </p>
              </div>
            </div>
            {/* card 3 */}
            <div className="bg-gray-200 space-y-4  flex flex-col p-4 py-5 w-full md:w-[35%]  rounded-lg">
              <div className="w-10 rounded-md h-10 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-6 h-6 bi bi-cash-stack"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                </svg>
              </div>
              <div className="mt-20"></div>
              <div className="mt-20">
                <p className="font-bold text-lg">Local payment options</p>
                <p>
                  With multiple local and international payment providers, you
                  have the freedom to choose.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </section>
      {/* section trade with your trusted broker today */}
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
                Trade with a trusted broker today
              </h2>
              <h2 className="text-gray-200 text-center md:text-start">
                See for yourself why CryptonaryBit is the broker of choice for
                over 800,000 traders and 64,000 partners.
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
      <Footer />
    </>
  );
};
export default AboutUs;
