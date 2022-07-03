import React from "react";
import "./Verify.css";

const VerifyMail = () => {
  return (
    <>
      <div className="verify-mail">
        <h2>Verify Your Mail</h2>
        <br />
        <div className="main-content">
          <p>We have sent an email to xyz@gmail.com</p>
          <br />
          <p>You need to verify your email to continue.</p>
          <p>
            If you have not received the verification email, please check your
            "Spam" or "Bulk Email" folder. You can also click the resend button
            below to have another email sent to you.
          </p>
          <br />
          <button type="submit" id="btn">
            Check again and continue
          </button>
          <br />
          <br />
          <a href="/">Resend verification Email</a>
        </div>
      </div>
    </>
  );
};

export default VerifyMail;
