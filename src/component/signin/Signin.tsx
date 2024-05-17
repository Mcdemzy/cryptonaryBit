// import React from 'react'
import "./signin.css";

const Signin = () => {
  return (
    <>
      <section className="signin__container">
        <div className="signin__welcome">
          <h1>Hello!</h1>
          <p>Welcome back</p>
        </div>

        {/* Form */}
        <form action="">
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="name@gmail.com " required />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="..........." required />
          </div>
          <a href="" className="signin__container-forgot">
            Forgot Password?
          </a>

          <button>Sign in</button>
          <p>
            Not a member yet? <a href="">Sign up</a>
          </p>
        </form>
      </section>
    </>
  );
};

export default Signin;
