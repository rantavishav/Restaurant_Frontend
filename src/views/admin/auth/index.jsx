import { useState } from "react";
import ForgotPassword from "./forgotPassword";
import AdminLogin from "./login";
import ResetPassword from "./resetPassword";

const LoginContainer = () => {
  const [screenName, setScreenName] = useState("LOGIN");

  return (
    <>
      {screenName === "LOGIN" && <AdminLogin setScreenName={setScreenName} />}
      {screenName === "FORGOT_PASSWORD" && (
        <ForgotPassword setScreenName={setScreenName} />
      )}
      {screenName === "RESET_PASSWORD" && (
        <ResetPassword setScreenName={setScreenName} />
      )}
    </>
  );
};

export default LoginContainer;
