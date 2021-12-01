import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Image from "next/image";
import Button from "../components/Button";

import Logo from "../public/logo.png";
import styles from "../styles/components/auth.module.css";
import { RootState } from "../redux/store";
import { authActions } from "../redux/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Auth: React.FC = () => {
  const login = useSelector((state: RootState) => state.user.login);
  const dispatch = useDispatch();
  const handleFormSwitch = () => {
    dispatch(authActions.setLogin(!login));
  };

  return (
    <div className={`bg-white font-helvetica relative h-screen`}>
      <div
        className={`h-full w-1/2 inline-block my-13 ${
          login ? "left-0" : "right-0"
        }  absolute`}
      >
        <div className=" max-w-login h-full mx-auto">
          <div className="py-11">
            <Image src={Logo} alt="logo" width="50" height="50" />
          </div>
          <h1 className="text-3xl font-bold mb-3">
            {login ? "Login" : "SignUp"}
          </h1>
          <p className="text-gray-500 font-medium mb-10 ">
            grow your relations stronger
          </p>

          {login ? <LoginForm login={login} /> : <SignUpForm login={login} />}

          <div className="font-medium">
            {login ? "Not registered yet?" : "Already have an Account?"}
            <span
              className="font-medium text-loginblue cursor-pointer"
              onClick={handleFormSwitch}
            >
              {login ? " Create an Account" : " Sign In"}
            </span>
          </div>
        </div>
      </div>
      <div
        className={`w-1/2 h-full inline-block align-top absolute ${
          login ? "right-0" : "left-0"
        } bg-blue-400 `}
      >
        content
      </div>
    </div>
  );
};

export default Auth;
