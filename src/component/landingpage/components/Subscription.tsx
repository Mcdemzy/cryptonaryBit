"use client";
import { useState } from "react";
const Subscription: React.FC = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  return (
    <>
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
    </>
  );
};
export default Subscription;
