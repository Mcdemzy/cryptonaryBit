// /src/components/signin/Signin.js
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
import { login } from "../../../utils/services";
import { useAuthContext } from "../../../context/authContext";

const Signin = () => {
  const { setIsAuth } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validateForm = email !== "" && password !== ""
    if (validateForm) {
      try {
        setLoading(true);
        const res = await login({
          email,
          password,
        });
        if (res.ok) {
          setIsAuth(true);
          navigate("/dashboard");
        }
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
        setError("Could not sign up");
        setLoading(false);
      }
    } else alert("Please fill out all the required fields");
  };

  return (
    <section className="signin__container">
      <div className="signin__welcome">
        <h1>Hello!</h1>
        <p>Welcome back</p>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="name@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="..........."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <a href="" className="signin__container-forgot">
          Forgot Password?
        </a>
        <button type="submit" disabled={loading}>{loading ? "loading ....." : "Signin"}</button>
        {error && <p>{error}</p>}
        <p>
          Not a member yet? <a href="/signup">Sign up</a>
        </p>
      </form>
    </section>
  );
};

export default Signin;
