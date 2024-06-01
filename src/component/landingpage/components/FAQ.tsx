const FAQ: React.FC = () => {
  return (
    <>
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
                  Cryptonary Pro is your gateway to mastering the crypto market.
                  Discover cutting-edge research and analysis, that will empower
                  you with the insights to capitalise on the most exciting
                  opportunities in crypto.
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
                  Our strategy combines macro, technical, and on-chain analysis
                  to highlight market trends and trading opportunities. This
                  multi-faceted approach ensures a well-rounded understanding of
                  the market and its trajectory.
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
                  levels, offering the insights and tools necessary for everyone
                  to navigate the crypto market successfully.
                </div>
              </details>
              <details className="group bg-yellow-200 rounded-md px-3">
                <summary className="font-semibold flex cursor-pointer list-none items-center justify-between py-4 text-lg text-secondary-900 group-open:text-primary-500">
                  What should i do if i misspeltor i am unsure about the email i
                  used when i signed up?
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
                  email you used and the correct email you intended to use. Our
                  support team will help update your account with the right
                  information.
                </div>
              </details>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};
export default FAQ;
