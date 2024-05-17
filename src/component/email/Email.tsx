// import React from "react";

const Email = () => {
  return (
    <>
      <section className="signin__container create__container">
        <h1>Email Verification</h1>
        <p>
          We will use this email to confirm that it is you on the app app
          <br />
        </p>
        {/* Form */}
        <form action="">
          <div>
            <label htmlFor="">Email Verification Code</label>
            <input type="email" placeholder="name@gmail.com " required />
          </div>

          <button>Verify</button>
        </form>
      </section>
    </>
  );
};

export default Email;
