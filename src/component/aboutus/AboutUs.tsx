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
            Give your trading strategy the advantage with our better-than-market
            <br /> conditions.
          </p>
          <div className="flex flex-wrap gap-y-4 flex-row justify-start items-center gap-x-5">
            <button className="w-fit sm:w-40 rounded-lg p-2 px-4 bg-primary">
              Register
            </button>
            <button className="w-fit sm:w-40  rounded-lg p-2 px-4 bg-gray-200">
              Try Free Demo
            </button>
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
          <div className="space-y-4 flex flex-col p-4 border-2  w-full md:w-[30%] md:h-[250px] rounded-lg">
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
              <button className="w-36 rounded-lg p-2 px-4 bg-primary">
                Register
              </button>
              <button className="w-36  rounded-lg p-2 px-4 bg-gray-200">
                Try Free Demo
              </button>
            </div>
          </div>
        </section>
      </section>
      {/* footer */}
      <footer className="mt-10 w-[90%] py-2 m-auto p-2 ">
        <aside>
          <div className="mx-auto max-w-3xl mt-8">
            <div className="w-full bg-gray-200 p-3 rounded-md">
              <div className="mt-6 flex justify-evenly flex-wrap">
                <a href="#" className="text-black">
                  Eductaion
                </a>
                <a href="#" className="text-black">
                  Privacy Policy
                </a>
                <a href="#" className="text-black">
                  Terms & Conditions
                </a>
                <a href="#" className="text-black">
                  Contact Us
                </a>
                <a href="#" className="text-black">
                  Library
                </a>
              </div>
              <div className=" justify-center items-center flex p-2">
                <div className="mt-8 flex flex-row gap-x-5  m-auto">
                  <div className="w-4 h-4  cursor-pointer  flex flex-row justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 bi bi-twitter text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                    </svg>
                  </div>
                  {/*  */}
                  <div className="w-4 h-4  cursor-pointer flex flex-row justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 bi bi-facebook text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </div>
                  {/*  */}
                  <div className="w-4 h-4 cursor-pointer flex flex-row justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-6 h-6 bi bi-instagram text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* text */}
            <div className="text-center mt-6">
              <p>
                Disclaimer: Not financial or investment advice. Any
                capital-related decisions you make are your full responsibility.
              </p>
              <p className="mt-6">© 2024 Cryptonary. All rights reserved.</p>
            </div>
          </div>
        </aside>
      </footer>
    </>
  );
};
export default AboutUs;
