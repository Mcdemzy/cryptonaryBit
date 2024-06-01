"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="mt-10 w-[90%] py-2 m-auto p-2 ">
      <aside>
        <div className="mx-auto max-w-3xl mt-8">
          <div className="w-full bg-gray-200 p-3 rounded-md">
            <div className="mt-6 flex justify-evenly flex-wrap">
              <a
                href="/docs/preventingmoneylaundering.pdf"
                target="_blank"
                className="hover:underline text-black"
              >
                Preventing Money Laundering
              </a>
              <a
                href="/docs/privacy-policy.pdf"
                target="_blank"
                className="text-black hover:underline"
              >
                Privacy Policy
              </a>
              <button
                onClick={openModal}
                className="hover:underline text-black"
              >
                Terms & Conditions
              </button>

              <Link to="/contact" className="text-black">
                Contact Us
              </Link>
              <a
                href="/docs/risk&disclosure.pdf"
                target="_blank"
                className="text-black hover:underline"
              >
                Risk & Disclosure
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
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10 relative max-w-lg w-full mx-4">
            <button
              className="text-xl font-bold absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
            <div className=" max-h-[550px] overflow-y-auto">
              <p>
                Welcome to CryptonaryBit. By accessing and using our platform,
                you agree to the following terms and conditions:
              </p>

              <h3 className="text-lg font-semibold mt-4">
                1. User Eligibility
              </h3>
              <p>
                To use the CryptonaryBit platform, you must be at least 18 years
                old and have the legal capacity to enter into a binding
                agreement. By registering for an account, you represent and
                warrant that you meet these requirements.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                2. Account Registration
              </h3>
              <p>
                You are required to provide accurate and complete information
                during the registration process. You are responsible for
                maintaining the confidentiality of your account credentials and
                for all activities that occur under your account. You agree to
                notify us immediately of any unauthorized use of your account.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                3. Trading Activities
              </h3>
              <p>
                CryptonaryBit provides a platform for trading financial
                instruments. We do not provide investment advice or
                recommendations. All trading decisions are made at your own
                risk. You acknowledge and accept the risks associated with
                trading, including the potential loss of your capital.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                4. Fees and Charges
              </h3>
              <p>
                You agree to pay all applicable fees and charges associated with
                your use of the CryptonaryBit platform. Fees may include, but
                are not limited to, trading fees, withdrawal fees, and other
                service-related charges. We reserve the right to modify our fee
                structure at any time with prior notice.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                5. Compliance with Laws
              </h3>
              <p>
                You agree to comply with all applicable laws and regulations
                when using our platform. You acknowledge that CryptonaryBit may
                be required to report certain transactions to regulatory
                authorities and that we may take necessary actions to comply
                with legal obligations.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                6. Intellectual Property
              </h3>
              <p>
                All content and materials on the CryptonaryBit website,
                including text, graphics, logos, and software, are the property
                of CryptonaryBit or its licensors and are protected by
                intellectual property laws. You may not reproduce, distribute,
                or create derivative works from any content without our prior
                written consent.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                7. Limitation of Liability
              </h3>
              <p>
                CryptonaryBit shall not be liable for any direct, indirect,
                incidental, special, or consequential damages resulting from
                your use of the platform. This includes, but is not limited to,
                damages for loss of profits, data, or other intangible losses.
              </p>

              <h3 className="text-lg font-semibold mt-4">
                8. Modification of Terms
              </h3>
              <p>
                We reserve the right to modify these terms and conditions at any
                time. Changes will be effective immediately upon posting on the
                website. Your continued use of the platform after any changes
                constitutes your acceptance of the new terms.
              </p>

              <h3 className="text-lg font-semibold mt-4">9. Governing Law</h3>
              <p>
                These terms and conditions are governed by the laws of [Your
                Jurisdiction]. Any disputes arising from these terms shall be
                resolved through arbitration in [Your Jurisdiction].
              </p>

              <h3 className="text-lg font-semibold mt-4">
                10. Contact Information
              </h3>
              <p>
                If you have any questions or need assistance, please contact us
                at [Contact Email/Phone].
              </p>

              <p className="mt-4">
                Thank you for using CryptonaryBit. We appreciate your trust in
                our platform.
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-primary p-2 px-3 text-white rounded-lg w-40"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
export default Footer;
