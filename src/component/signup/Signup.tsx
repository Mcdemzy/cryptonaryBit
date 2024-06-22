// /src/components/signup/Signup.js
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../utils/services";
import "./signup.css";
import { useAuthContext } from "../../../context/authContext";

const Signup = () => {
  const { setIsAuth } = useAuthContext();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validateForm = email !== "" && firstName !== "" && lastName !== "" && password !== ""
    if (validateForm) {
      try {
        setLoading(true);
        const res = await signup({
          email,
          firstName,
          lastName,
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
    } else alert("Please enter all required fields");
  };

  return (
    <section className="signin__container signup__container">
      <h1>Sign Up</h1>
      <p>
        A few minutes is all it takes. Join the fastest and safest Bitcoin app
        that guarantees the best rates in the market
      </p>
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
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Your mobile number"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <a href="" className="signin__container-forgot">
          Forgot Password?
        </a>
        <button type="submit" disabled={loading}>{loading ? "loading ....." : "Next"}</button>
        {error && <p>{error}</p>}
        <p>
          Already a member? <a href="/signin">Sign in</a>
        </p>
      </form>
    </section>
  );
};

export default Signup;
