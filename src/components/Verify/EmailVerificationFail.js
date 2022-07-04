import { useNavigate } from "react-router-dom";

export const EmailVerificationFail = () => {
  const navigateTo = useNavigate();

  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Uh oh!</h1>
        <p>Something went wrong while trying to verify your email...</p>
        <button onClick={() => navigateTo("/")}>Back to Sign-Up</button>
      </div>
    </div>
  );
};
