// import React from "react";

const Forgot = () => {
  return (
    <>
      <section className="signin__container create__container">
        <h1>Forgot Password</h1>
        <p>
          You can get creative with your username.
          <br />
          Provide a password that is hard for anyone to guess.
        </p>
        {/* Form */}
        <form action="">
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="name@gmail.com " required />
          </div>

          <button>Reset Password</button>
        </form>
      </section>
    </>
  );
};

export default Forgot;
