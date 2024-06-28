import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_02kdddd",
          "template_l6hkpwc",
          form.current,
          "tgx-5mWF46g_gCmkw"
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessageSent(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.currentTarget.reset();
    }
  };

  return (
    <>
      <section className="bg-gray-900 h-full">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about CryptonaryBit? or
            Need details about our plans? Let us know.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-primary"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full py-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-primary"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block py-4 p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-primary"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                name="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary sm:w-fit hover:bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
          {/* Display popup when message is sent */}
          {messageSent && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-lg font-semibold">Message Sent!</p>
                <button
                  onClick={() => setMessageSent(false)}
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark cursor-pointer"
                >
                  Close
                </button>
              </div>
              <div
                className="fixed inset-0 bg-black opacity-20"
                onClick={() => setMessageSent(false)}
              ></div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ContactUs;
