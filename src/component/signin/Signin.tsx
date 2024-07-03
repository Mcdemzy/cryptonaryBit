import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuthContext } from "../../../context/authContext";
// import { login } from "../../../utils/services";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";

// interface LoginResponse {
//   ok: boolean;
//   error?: string;
// }

const Signin = () => {
  // const { setIsAuth } = useAuthContext();
  const [email, setEmail] = useState<string>("");
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

    if (!email || !password) {
      setError("Please fill out all the required fields");
      setTimeout(() => setError(""), 1500);
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address");
      setTimeout(() => setError(""), 1500);
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long");
      setTimeout(() => setError(""), 1500);
      return;
    }

    try {
      setLoading(true);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("token", user.uid);
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error", error);
      setError("An unexpected error occurred. Please try again.");
      setTimeout(() => setError(""), 1500);
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0d141c] text-[#ffffff] p-5 pt-10">
      <div className="text-center mb-20">
        <h1 className="font-serif text-5xl italic font-normal text-[#ffcc00] mt-10 mb-3">
          CryptonaryBit
        </h1>
        <p className="text-[#a5a5a5] text-xl">Welcome back</p>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
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
        <a href="/forgotpassword" className="block text-right text-[#ffcc00] mb-5">
          Forgot Password?
        </a>
        <button
          type="submit"
          disabled={loading}
          className="w-full h-16 bg-[#ffcc00] text-[#0d141c] flex justify-center items-center rounded-lg text-xl font-medium"
        >
          {loading ? "Loading ....." : "Signin"}
        </button>
        {error && (
          <p className="text-[rgba(255,0,0,0.8)] text-center mt-3">{error}</p>
        )}
        <p className="text-center mt-5">
          Not a member yet?{" "}
          <Link to="/signup" className="text-[#ffcc00]">
            Sign up
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Signin;
