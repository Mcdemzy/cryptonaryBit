// import React from 'react'
import "./create.css";

const Create = () => {
  return (
    <>
      <section className="signin__container signup__container create__container">
        <h1>Create Account</h1>
        <p>
          You can get creative with your username.
          <br />
          Provide a password that is hard for anyone to guess.
        </p>

        {/* Form */}
        <form action="">
          <div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="JohnDoe " required />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="..........." required />
          </div>

          <button>Go to Verification</button>
        </form>
      </section>
    </>
  );
};

export default Create;
