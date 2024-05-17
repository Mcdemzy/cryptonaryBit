// import Navbar from "../navbar/Navbar";
import { useState } from "react";
import Navbar from "./components/Navbar";
import "./landingpage.css";
import Timer from "./components/Timer";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <>
      <article className="landing__page">
        <Navbar />
        <section className="banner__section">
          <h1>
            The time to{" "}
            <span>
              invest in <br /> crypto{" "}
            </span>
            is now.
          </h1>
          <p>Seize the moment before the giants do</p>
          {/* Timer*/}
          <Timer />
          <a href="">Become a Winner</a>

          {/* Video Div */}
          <div className="w-[95%] border-2 mt-10 m-auto h-[400px] md:h-[700px] flex justify-center items-center rounded-md">
            <div className="relative w-full h-full flex justify-center items-center rounded-md">
              <video
                className=" w-full h-full object-cover object-center m-auto rounded-md"
                controls
              >
                <source src={`/vid1.MP4`} type="video/mp4" />
              </video>
            </div>
          </div>
          {/* Text Div */}
          <div className="text__section m-auto">
            <p>
              For the first time, we have a consistent flow of capital entering
              the crypto market. This will culminate in the biggest bull run in
              history. This is how you get ahead of the institutional curve...
            </p>

            <h3 className="text-sm">Seize this rare opportunity</h3>
            <p>
              Cryptonary, founded in 2017, is a research and analysis firm
              designed for retail investors like you. Our members get on-demand
              access to a team of researchers and analysts who specialise in
              finding crypto tokens with the highest return possible.
            </p>
            <p>Your unfair advantage and 100X opportunities await…</p>
          </div>
        </section>
        {/* Features Section */}
        <section className="features__section">
          {/* accordian section here  */}
          <div className=" w-[80%] md:w-[90%] m-auto">
            {/* Accordian */}
            <aside>
              <div className="mx-auto max-w-5xl mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <details className="group rounded-md px-3" open>
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-primary bi bi-mic"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                          </svg>
                        </div>
                        <p>Premium Research</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Discover our top token picks for 2024. Capitalise on
                        winning crypto opportunities and optimise your portfolio
                        the simple way.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-primary bi bi-flower3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268M9 4a2 2 0 0 1-.045.205q-.059.2-.183.484a13 13 0 0 1-.637 1.223L8 6.142l-.135-.23a13 13 0 0 1-.637-1.223 4 4 0 0 1-.183-.484A2 2 0 0 1 7 4a1 1 0 1 1 2 0M3.67 5.5a1 1 0 0 1 1.366-.366 2 2 0 0 1 .156.142q.142.15.326.4c.245.333.502.747.742 1.163l.13.232-.265.002a13 13 0 0 1-1.379-.06 4 4 0 0 1-.51-.083 2 2 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5m1.366 5.366a1 1 0 0 1-1-1.732l.047-.02q.055-.02.153-.044.202-.048.51-.083a13 13 0 0 1 1.379-.06q.135 0 .266.002l-.131.232c-.24.416-.497.83-.742 1.163a4 4 0 0 1-.327.4 2 2 0 0 1-.155.142M9 12a1 1 0 0 1-2 0 2 2 0 0 1 .045-.206q.058-.198.183-.483c.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223q.124.285.183.484A1.3 1.3 0 0 1 9 12m3.33-6.5a1 1 0 0 1-.366 1.366 2 2 0 0 1-.2.064q-.202.048-.51.083c-.412.045-.898.061-1.379.06q-.135 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4 4 0 0 1 .327-.4q.07-.074.114-.11l.041-.032a1 1 0 0 1 1.366.366m-1.366 5.366a2 2 0 0 1-.155-.141 4 4 0 0 1-.327-.4A13 13 0 0 1 9.74 9.16l-.13-.232.265-.002c.48-.001.967.015 1.379.06q.308.035.51.083.098.024.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                          </svg>
                        </div>
                        <p>Altcoin opportunities</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Access potential altcoin trading setups, analysis, entry
                        zones, accumulation levels and risk information.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-primary bi bi-airplane-engines"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z" />
                          </svg>
                        </div>
                        <p>Smary Money</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Uncover the secrets of crypto’s most successful
                        investors. Capitalise on opportunities early.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 flex-justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-primary bi bi-airplane-engines"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z" />
                          </svg>
                        </div>
                        <p>Cryptonary's Picks</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Access potential altcoin trading setups, analysis, entry
                        zones, accumulation levels and risk information.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>{" "}
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-primary bi bi-people-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                          </svg>
                        </div>
                        <p>Airdrops Tool</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Access potential altcoin trading setups, analysis, entry
                        zones, accumulation levels and risk information.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-primary bi bi-people-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                          </svg>
                        </div>
                        <p>Community</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Access potential altcoin trading setups, analysis, entry
                        zones, accumulation levels and risk information.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>{" "}
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-primary bi bi-wallet2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                          </svg>
                        </div>
                        <p>Market Updates</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Discover our top token picks for 2024. Capitalise on
                        winning crypto opportunities and optimise your portfolio
                        the simple way.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="text-primary w-6 h-6 bi bi-book"
                            viewBox="0 0 16 16"
                          >
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                          </svg>
                        </div>
                        <p>Portfolie Tracker</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Access potential altcoin trading setups, analysis, entry
                        zones, accumulation levels and risk information.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>{" "}
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 flex-justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-primary bi bi-airplane-engines"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z" />
                          </svg>
                        </div>
                        <p>Market Direction</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Discover our top token picks for 2024. Capitalise on
                        winning crypto opportunities and optimise your portfolio
                        the simple way.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 flex-justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-primary bi bi-airplane-engines"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z" />
                          </svg>
                        </div>
                        <p>Altcoin opportunities</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Access potential altcoin trading setups, analysis, entry
                        zones, accumulation levels and risk information.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>{" "}
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-primary bi bi-mic"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                          </svg>
                        </div>
                        <p>Premium Research</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Discover our top token picks for 2024. Capitalise on
                        winning crypto opportunities and optimise your portfolio
                        the simple way.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>
                <div className="col-span-1">
                  <details className="group rounded-md px-3">
                    <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                      <div className="flex flex-row justify-start gap-x-3 items-center">
                        <div className="w-6 h-6 flex justify-start items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-6 h-6 text-primary bi bi-flower1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826M8 1a1 1 0 0 0-.998 1.03l.01.091q.017.116.054.296c.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a5 5 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1M2 9l.03-.002.091-.01a5 5 0 0 0 .296-.054c.241-.049.542-.122.887-.213a61 61 0 0 0 2.314-.676L5.762 8l-.144-.045a61 61 0 0 0-2.314-.676 17 17 0 0 0-.887-.213 5 5 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2m7 5-.002-.03a5 5 0 0 0-.064-.386 16 16 0 0 0-.213-.888 61 61 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a5 5 0 0 0-.064.386L7 14a1 1 0 1 0 2 0m-5.696-2.134.025-.017a5 5 0 0 0 .303-.248c.184-.164.408-.377.661-.629A61 61 0 0 0 5.96 9.23l.103-.111-.147.033a61 61 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5 5 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027q.014-.03.036-.084a5 5 0 0 0 .102-.283c.078-.233.165-.53.258-.874a61 61 0 0 0 .572-2.343l.033-.147-.11.102a61 61 0 0 0-1.743 1.667 17 17 0 0 0-.629.66 5 5 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366m9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a5 5 0 0 0-.303.248 17 17 0 0 0-.661.629A61 61 0 0 0 10.04 6.77l-.102.111.147-.033a61 61 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a5 5 0 0 0 .367-.138zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027q-.014.03-.036.084a5 5 0 0 0-.102.283c-.078.233-.165.53-.258.875a61 61 0 0 0-.572 2.342l-.033.147.11-.102a61 61 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5 5 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366M14 9a1 1 0 0 0 0-2l-.03.002a5 5 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a5 5 0 0 0 .386.064zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035q.108.045.283.103c.233.078.53.165.874.258a61 61 0 0 0 2.343.572l.147.033-.103-.111a61 61 0 0 0-1.666-1.742 17 17 0 0 0-.66-.629 5 5 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366m2.196-1.196.017.025a5 5 0 0 0 .248.303c.164.184.377.408.629.661A61 61 0 0 0 6.77 5.96l.111.102-.033-.147a61 61 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5 5 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1m9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a61 61 0 0 0-2.342-.572l-.147-.033.102.111a61 61 0 0 0 1.667 1.742c.253.252.477.465.66.629a5 5 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366m-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5 5 0 0 0-.248-.303 17 17 0 0 0-.629-.661A61 61 0 0 0 9.23 10.04l-.111-.102.033.147a61 61 0 0 0 .572 2.342c.093.345.18.642.258.875a5 5 0 0 0 .138.367zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                          </svg>
                        </div>
                        <p>ETF Tracker</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="block h-5 w-5 group-open:hidden"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="hidden h-5 w-5 group-open:block"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </div>
                    </summary>
                    <div className="pb-4 text-secondary-500">
                      <div className="flex flex-col">
                        Access potential altcoin trading setups, analysis, entry
                        zones, accumulation levels and risk information.
                        <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </details>
                </div>{" "}
              </div>
            </aside>
          </div>
        </section>
        {/* Ride the crypto wave section */}
        <section className="mt-10 w-[90%]  m-auto p-2">
          <h1 className=" m-auto mt-10 text-black font-bold text-4xl text-center">
            Ride the crypto wave to a <br />
            multi-million dollar portfolio
          </h1>
          <div className="mt-10 w-full flex flex-col md:flex-row">
            <div className="w-full md:w-[50%]  hidden md:block  space-y-4 p-6">
              <img
                className="mt-2 w-[60%] h-[200px] m-auto shadow-md rounded-md shadow-gray-200"
                src="/photo1.jpg"
              />
              <img
                src="/photo2.jpg"
                className="mt-2 w-[60%] h-[200px] m-auto shadow-md rounded-md shadow-gray-200"
              />
              <img
                src="/photo3.jpg"
                className="mt-2 w-[60%] h-[200px] m-auto shadow-md rounded-md shadow-gray-200"
              />
              <img
                src="/photo4.jpg"
                className="mt-2 w-[60%] h-[200px] m-auto shadow-md rounded-md shadow-gray-200"
              />
            </div>
            <div className="w-full md:w-[50%] space-y-4 p-6">
              <div className="md:h-[200px]">
                <details className="group rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                    <div className="flex flex-row justify-start gap-x-3 items-center">
                      <div className="w-6 h-6 flex justify-start items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-6 h-6 text-primary bi bi-flower1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826M8 1a1 1 0 0 0-.998 1.03l.01.091q.017.116.054.296c.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a5 5 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1M2 9l.03-.002.091-.01a5 5 0 0 0 .296-.054c.241-.049.542-.122.887-.213a61 61 0 0 0 2.314-.676L5.762 8l-.144-.045a61 61 0 0 0-2.314-.676 17 17 0 0 0-.887-.213 5 5 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2m7 5-.002-.03a5 5 0 0 0-.064-.386 16 16 0 0 0-.213-.888 61 61 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a5 5 0 0 0-.064.386L7 14a1 1 0 1 0 2 0m-5.696-2.134.025-.017a5 5 0 0 0 .303-.248c.184-.164.408-.377.661-.629A61 61 0 0 0 5.96 9.23l.103-.111-.147.033a61 61 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5 5 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027q.014-.03.036-.084a5 5 0 0 0 .102-.283c.078-.233.165-.53.258-.874a61 61 0 0 0 .572-2.343l.033-.147-.11.102a61 61 0 0 0-1.743 1.667 17 17 0 0 0-.629.66 5 5 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366m9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a5 5 0 0 0-.303.248 17 17 0 0 0-.661.629A61 61 0 0 0 10.04 6.77l-.102.111.147-.033a61 61 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a5 5 0 0 0 .367-.138zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027q-.014.03-.036.084a5 5 0 0 0-.102.283c-.078.233-.165.53-.258.875a61 61 0 0 0-.572 2.342l-.033.147.11-.102a61 61 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5 5 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366M14 9a1 1 0 0 0 0-2l-.03.002a5 5 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a5 5 0 0 0 .386.064zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035q.108.045.283.103c.233.078.53.165.874.258a61 61 0 0 0 2.343.572l.147.033-.103-.111a61 61 0 0 0-1.666-1.742 17 17 0 0 0-.66-.629 5 5 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366m2.196-1.196.017.025a5 5 0 0 0 .248.303c.164.184.377.408.629.661A61 61 0 0 0 6.77 5.96l.111.102-.033-.147a61 61 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5 5 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1m9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a61 61 0 0 0-2.342-.572l-.147-.033.102.111a61 61 0 0 0 1.667 1.742c.253.252.477.465.66.629a5 5 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366m-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5 5 0 0 0-.248-.303 17 17 0 0 0-.629-.661A61 61 0 0 0 9.23 10.04l-.111-.102.033.147a61 61 0 0 0 .572 2.342c.093.345.18.642.258.875a5 5 0 0 0 .138.367zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                        </svg>
                      </div>
                      <p>Altcoin opportunities</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    <div className="flex flex-col">
                      Access potential altcoin trading setups, analysis, entry
                      zones, accumulation levels and risk information.
                      <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                        Learn More
                      </button>
                    </div>
                  </div>
                </details>
              </div>
              <div className="md:h-[200px]">
                <details className="group rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                    <div className="flex flex-row justify-start gap-x-3 items-center">
                      <div className="w-6 h-6 flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-6 h-6 text-primary bi bi-mic"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                          <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                        </svg>
                      </div>
                      <p>Altcoin opportunities</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    <div className="flex flex-col">
                      Access potential altcoin trading setups, analysis, entry
                      zones, accumulation levels and risk information.
                      <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                        Learn More
                      </button>
                    </div>
                  </div>
                </details>
              </div>
              <div className="md:h-[200px]">
                <details className="group rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                    <div className="flex flex-row justify-start gap-x-3 items-center">
                      <div className="w-6 h-6 flex-justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-6 h-6 text-primary bi bi-airplane-engines"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z" />
                        </svg>
                      </div>
                      <p>Altcoin opportunities</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    <div className="flex flex-col">
                      Access potential altcoin trading setups, analysis, entry
                      zones, accumulation levels and risk information.
                      <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                        Learn More
                      </button>
                    </div>
                  </div>
                </details>
              </div>
              <div className="h-[200px]">
                <details className="group rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                    <div className="flex flex-row justify-start gap-x-3 items-center">
                      <div className="w-6 h-6 flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-6 h-6 text-primary bi bi-people-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                        </svg>
                      </div>
                      <p>Altcoin opportunities</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    <div className="flex flex-col">
                      Access potential altcoin trading setups, analysis, entry
                      zones, accumulation levels and risk information.
                      <button className="mt-2 bg-yellow-200 hover:bg-primary py-2 rounded-md w-52 text-black">
                        Learn More
                      </button>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
        {/* Ride the crypto wave section */}
        <section className="rounded-md relative mt-10 h-[500px] md:w-[90%] md:h-auto py-10 border-2 m-auto p-2 overflow-hidden">
          <video
            className="rounded-md  absolute top-0 left-0 w-full h-full object-cover z-[-2]"
            autoPlay
            loop
            muted
          >
            <source src={`vid2.MP4`} type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full md:h-full bg-black opacity-50 z-[-1]"></div>
          <h1 className="mt-10 text-white font-bold text-lg md:text-4xl text-center">
            Escape the financial rat race & earn <br />
            generational wealth in the 2024 bull run
          </h1>
          {/* Text Div */}
          <div className="text__section mt-2 md:mt-4 text-white text-center">
            <p>
              Making money in crypto is all about the information you consume.
            </p>
            <p className="hidden md:visible">
              Good information equals positive returns. Bad information equals
              losses. The best information equals 100X explosive portfolio
              growth.
            </p>
            <p className="hidden md:visible">
              By leveraging Cryptonary's research, analysis and community, this
              explosive growth is a foregone conclusion.
            </p>
            <p>
              But opportunity waits for no one. Seize this one while you still
              can. Don't let it pass you by only to watch others reap the gains.
            </p>

            <button className="flex w-full md:w-[30%] text-xl rounded-md p-2 m-auto height-[3rem] justify-center items-center bg-primary text-[#fcfcfd]">
              Become a winner
            </button>
          </div>
        </section>
        {/* Section Subscription */}
        <section className="mt-10 w-[90%] py-2  m-auto p-2 ">
          <h2 className=" m-auto mt-10 text-black font-bold text-4xl text-center">
            Unlock instant access to crypto's hottest opportunities
          </h2>
          {/* title */}
          <div className="mt-8  flex flex-row w-[100%] justify-center space-x-5">
            <div className=" flex flex-row justify-center items-center">
              Pay with Card
            </div>
            <div className=" flex flex-row justify-center items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex flex-row justify-center items-center">
              Pay with Crypto
            </div>
          </div>
          {/* card body */}
          <aside className="w-full mt-8 flex flex-col m-auto justify-center items-center">
            <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  ">
              <div className="p-4 ">
                {/* button tab */}

                <div className="flex flex-row justify-center items-center w-full">
                  <button
                    className={`px-2 rounded-md w-24 ${
                      activeTab === "monthly" ? "bg-primary" : "bg-gray-200"
                    }`}
                    onClick={() => setActiveTab("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-2 rounded-md w-24 ${
                      activeTab === "yearly" ? "bg-primary" : "bg-gray-200"
                    }`}
                    onClick={() => setActiveTab("yearly")}
                  >
                    Yearly
                  </button>
                </div>
                {/* amount */}
                <div className="flex flex-col justify-center items-center w-full">
                  {" "}
                  <h2 className="text-black mt-4 text-2xl text-center">
                    Minimum Investment
                  </h2>
                  <h2 className="text-black mt-4 text-2xl">$250.00</h2>
                </div>
              </div>

              <ul role="list" className="space-y-5 my-7">
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="w-full flex  flex-row justify-start items-center gap-x-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    <p className="text-black font-semibold">Research:</p>
                    <span className="text-black">
                      {" "}
                      Uncover a curated list of token picks and investments
                    </span>
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="w-full flex  flex-row justify-start items-center gap-x-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    <p className="text-black font-semibold">Analysis:</p>
                    <span className="text-black">
                      {" "}
                      Discover trading setups and make informed decisions
                    </span>
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="w-full flex  flex-row justify-start items-center gap-x-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    <p className="text-black font-semibold">Community:</p>
                    <span className="text-black">
                      {" "}
                      Get real-time feedback and join our live events
                    </span>
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="w-full flex  flex-row justify-start items-center gap-x-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    <p className="text-black font-semibold">Tools:</p>
                    <span className="text-black">
                      {" "}
                      Optimise your portfolio & get data-driven insights
                    </span>
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Subscribe
              </button>
            </div>
          </aside>
        </section>
        {/* Section FAQ */}
        <section className="mt-10 w-[90%] py-2 m-auto p-2 ">
          <h2 className=" m-auto mt-10 text-black font-bold text-4xl text-center">
            Frequently Asked Questions
          </h2>
          {/* Accordian */}
          <aside>
            <div className="mx-auto max-w-3xl mt-8">
              <div className="divide-y divide-gray-100 space-y-4">
                <details className="group bg-yellow-200 rounded-md px-3" open>
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                    What is Cryptonary Pro?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    Cryptonary Pro is your gateway to mastering the crypto
                    market. Discover cutting-edge research and analysis, that
                    will empower you with the insights to capitalise on the most
                    exciting opportunities in crypto.
                  </div>
                </details>
                <details className="group bg-yellow-200 rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg  text-secondary-900 group-open:text-primary-500">
                    How do we research?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className=" pb-4 text-secondary-500">
                    Our research is grounded in a meticulous analysis of the
                    crypto market. We track trends and leverage a wide array of
                    data sources to spotlight winning investments.
                  </div>
                </details>
                <details className="group bg-yellow-200 rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                    What about our analysis?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    Our strategy combines macro, technical, and on-chain
                    analysis to highlight market trends and trading
                    opportunities. This multi-faceted approach ensures a
                    well-rounded understanding of the market and its trajectory.
                  </div>
                </details>
                <details className="group bg-yellow-200 rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                    Team experience?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    Boasting 30+ years of collective experience, our team is at
                    the forefront of crypto research.
                  </div>
                </details>
                <details className="group bg-yellow-200 rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                    Is Cryptonary suitable for begineers?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    Absolutely. Cryptonary is designed for investors at all
                    levels, offering the insights and tools necessary for
                    everyone to navigate the crypto market successfully.
                  </div>
                </details>
                <details className="group bg-yellow-200 rounded-md px-3">
                  <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                    What should i do if i misspeltor i am unsure about the email
                    i used when i signed up?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500">
                    If you entered your email incorrectly or are uncertain about
                    the email you provided when you signed up, please contact us
                    at support@cryptonary.com. If possible, please include the
                    email you used and the correct email you intended to use.
                    Our support team will help update your account with the
                    right information.
                  </div>
                </details>
              </div>
            </div>
          </aside>
        </section>
        {/*  footer */}
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
                  capital-related decisions you make are your full
                  responsibility.
                </p>
                <p className="mt-6">© 2024 Cryptonary. All rights reserved.</p>
              </div>
            </div>
          </aside>
        </footer>
      </article>
    </>
  );
};

export default LandingPage;
