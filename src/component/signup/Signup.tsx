import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../../utils/services";
import { useAuthContext } from "../../../context/authContext";

interface SignupResponse {
  ok: boolean;
  error?: string;
}

const Signup = () => {
  const { setIsAuth } = useAuthContext();
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setError("");

    if (!email || !firstName || !lastName || !password) {
      setError("Please fill out all the required fields");
      setTimeout(() => setError(""), 2000);
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address");
      setTimeout(() => setError(""), 2000);
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long");
      setTimeout(() => setError(""), 2000);
      return;
    }

    try {
      setLoading(true);
      const res: SignupResponse = await signup({
        email,
        firstName,
        lastName,
        password,
      });
      setLoading(false);

      if (res.ok) {
        setIsAuth(true);
        navigate("/dashboard");
      } else {
        setError(res.error || "Could not sign up");
        setTimeout(() => setError(""), 2000);
      }
    } catch (error) {
      console.error("Error", error);
      setError("An unexpected error occurred. Please try again.");
      setTimeout(() => setError(""), 2000);
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0d141c] text-[#ffffff] min-h-screen p-5 pt-10 flex flex-col items-center justify-center">
      <h1 className="font-serif text-5xl italic font-normal text-[#ffcc00] mt-10 mb-3">
        CryptonaryBit
      </h1>
      <p className="text-[#a5a5a5] text-xl mb-8 text-center">
        {/* A few minutes is all it takes. Join the fastest and safest Bitcoin app
        that guarantees the best rates in the market. */}
        Signup Now
      </p>
      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-[40rem]">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 p-1">
            Email
          </label>
          <input
            type="email"
            placeholder="name@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-16 bg-[#060d17] p-3 rounded-lg text-[#ffffff] mb-5 outline-none border border-[#a5a5a5]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2 p-1">
            First Name
          </label>
          <input
            type="text"
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full h-16 bg-[#060d17] p-3 rounded-lg text-[#ffffff] mb-5 outline-none border border-[#a5a5a5]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2 p-1">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="w-full h-16 bg-[#060d17] p-3 rounded-lg text-[#ffffff] mb-5 outline-none border border-[#a5a5a5]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 p-1">
            Password
          </label>
          <input
            type="password"
            placeholder="..........."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full h-16 bg-[#060d17] p-3 rounded-lg text-[#ffffff] mb-5 outline-none border border-[#a5a5a5]"
          />
        </div>
        <a href="/" className="block text-right text-[#ffcc00] mb-5">
          Forgot Password?
        </a>
        <button
          type="submit"
          disabled={loading}
          className="w-full h-16 bg-[#ffcc00] text-[#0d141c] flex justify-center items-center rounded-lg text-xl font-medium"
        >
          {loading ? "Loading ....." : "Next"}
        </button>
        {error && (
          <p className="text-[rgba(255,0,0,0.8)] text-center mt-3">{error}</p>
        )}
        <p className="text-center mt-5">
          Already a member?{" "}
          <Link to="/login" className="text-[#ffcc00]">
            Sign in
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Signup;
