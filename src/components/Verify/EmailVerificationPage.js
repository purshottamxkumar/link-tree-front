import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";
import { EmailVerificationSuccess } from "./EmailVerificationSuccess";
import { EmailVerificationFail } from "./EmailVerificationFail";

import React from "react";

const EmailVerificationPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  // const [user, setUser] = useState(null);
  const { verificationString } = useParams();
  const [, setToken] = useToken();
  useEffect(() => {
    const loadVerification = async () => {
      try {
        const response = await axios.put(
          "http://localhost:5000/user/verify-email",
          {
            verificationString,
          }
        );
        const { token } = response.data;
        setToken(token);
        setIsSuccess(true);
        setIsLoading(false);
      } catch (error) {
        setIsSuccess(false);
        setIsLoading(false);
        console.log(error);
      }
    };

    loadVerification();
  }, [setToken, verificationString]);

  if (isLoading)
    return (
      <div className="page-container">
        <p>Loading...</p>
      </div>
    );
  if (!isSuccess) return <EmailVerificationFail />;
  return <EmailVerificationSuccess />;
};

export default EmailVerificationPage;
