import React from "react";
import type { NextPage } from "next";
import Button from "../components/Button";
const login: NextPage = () => {
  return (
    <div className="bg-white font-helvetica flex items-center  h-screen">
      <div className=" h-full w-1/2 my-13 p-5 mx-20 relative">
        <h1 className="text-3xl font-bold mb-3">Login</h1>
        <p className="text-gray-500">grow your relations stronger</p>
        <Button style=" rounded-full transparent " />
        <form action="" className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input className="rounded-full " type="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </form>
        <div className="flex">
          <div>
            <input type="checkbox" name="rememeber" id="rememberme" />
            <label htmlFor="rememberme">Remember me</label>
          </div>
          <div>Forgot password?</div>
        </div>
        <Button style="rounded-full bg-blue" />
        <div>
          Not registered yet? <span>Create an account</span>
        </div>
        <p>all rights owned by niranj</p>
      </div>
      <div className="w-1/2 h-full bg-blue-400">content</div>
    </div>
  );
};

export default login;
