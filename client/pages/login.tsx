import React from "react";
import type { NextPage } from "next";
import AuthForm from "../components/AuthForm";
const login: NextPage = () => {
  return (
    <div className="bg-white font-helvetica flex items-center  h-screen">
      <AuthForm />
      <div className="w-1/2 h-full bg-blue-400">content</div>
    </div>
  );
};

export default login;
