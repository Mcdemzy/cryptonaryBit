// import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <>
      <section className="signin__container signup__container">
        <h1>Sign Up</h1>
        <p>
          A few minutes is all it takes. Join the fastest and safest Bitcoin app
          that guarantees the best rates in the market
        </p>

        {/* Form */}
        <form action="">
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="name@gmail.com " required />
          </div>
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" placeholder="John" required />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="Doe" required />
          </div>

          <div>
            <label htmlFor="">Phone Number</label>
            <input type="number" placeholder="Your mobile number" required />
          </div>
          <a href="" className="signin__container-forgot">
            Forgot Password?
          </a>

          <button>Next</button>
          <p>
            Not a member yet? <a href="">Sign up</a>
          </p>
        </form>
      </section>
    </>
  );
};

export default Signup;
