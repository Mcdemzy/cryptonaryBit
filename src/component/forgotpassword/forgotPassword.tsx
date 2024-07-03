import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleForgotPassword = async () => {
    try {
      setLoading(true);
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      setLoading(false);
      setCompleted(true);
    } catch (error) {
      alert('error reseting your email');
      setLoading(false);
    }
  };

  if (completed) {
    return (
      <section className="flex justify-center h-screen items-center bg-[#0D141C] text-white">
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-5xl italic font-normal text-[#ffcc00] mt-10 mb-3">
            CryptonaryBit
          </h1>
          <p>An email has been sent to your inbox!</p>
        </div>
      </section>
    )
  } else {
    return (
      <section className="flex flex-col items-center bg-[#0D141C] h-screen space-y-6 text-white">
        <div className="w-[90%] sm:w-[70%] md:w-[53%] xl:w-[40%] flex flex-col space-y-6">
          <div className="mt-[6rem] flex flex-col items-center">
            <h1 className="font-serif text-5xl italic font-normal text-[#ffcc00]">
              CryptonaryBit
            </h1>
            <h1 className="text-2xl mt-6">Reset your password</h1>
          </div>
          <div>
            <p className="py-6">Enter your user account&apos;s verified email address and we will send you a password reset link.</p>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-16 bg-[#060d17] p-3 rounded-lg text-[#ffffff] mb-5 outline-none border border-[#a5a5a5]"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              onClick={handleForgotPassword}
              className="w-full h-16 bg-[#ffcc00] text-[#0d141c] flex justify-center items-center rounded-lg text-xl font-medium"
            >
              {loading ? "Loading ....." : "Send email"}
            </button>
          </div>
        </div>
      </section>
    );
  }
};

export default ForgotPassword;
