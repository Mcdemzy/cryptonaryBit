// /src/components/signin/Signin.js
import { useSignIn } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const Signin = () => {
  const { signIn } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signIn) {
      try {
        await signIn.create({
          identifier: email,
          password,
        });
        navigate("/dashboard");
      } catch (err) {
        setError("Invalid email or password");
      }
    }
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
        <button type="submit">Sign in</button>
        {error && <p>{error}</p>}
        <p>
          Not a member yet? <a href="/signup">Sign up</a>
        </p>
      </form>
    </section>
  );
};

export default Signin;
