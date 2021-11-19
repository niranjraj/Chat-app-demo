import React, { useState } from "react";
import Image from "next/image";
import { useForm, SubmitHandler, ValidationMode } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../util/ValidationSchema";
import Button from "../components/Button";
import Logo from "../public/logo.png";
import styles from "../styles/components/auth.module.css";
type user = {
  email: string;
  password: string;
};

const AuthForm: React.FC = () => {
  const [login, setLogin] = useState<boolean>(true);
  const { register, handleSubmit, formState } = useForm<user>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const { errors } = formState;
  const submitHandler = (data: user) => {
    alert("success");
  };

  console.log(errors);

  return (
    <div className="h-full w-1/2 my-13  relative">
      <div className=" max-w-login h-full mx-auto">
        <div className="py-11">
          <Image src={Logo} alt="logo" width="50" height="50" />
        </div>
        <h1 className="text-3xl font-bold mb-3">Login{}</h1>
        <p className="text-gray-500 font-medium mb-10 ">
          grow your relations stronger
        </p>
        <Button
          style={`${styles.inputBtn} font-medium`}
          text="Sign in with Google"
        />
        <div className="text-gray-500 font-medium mb-6">
          or sign in with email
        </div>
        {login ? (
          <form
            action=""
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col mb-10"
          >
            <label htmlFor="email" className="font-normal mb-1">
              Email
            </label>
            <input
              className={`${styles.inputBtn} focus:border-loginblue`}
              {...register("email")}
              type="email"
              id="email"
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
            <label htmlFor="password" className="font-normal mb-1 ">
              Password
            </label>
            <input
              className={`${styles.inputBtn} focus:border-loginblue`}
              type="password"
              {...register("password")}
              id="password"
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
            <div className="flex justify-between mb-10">
              <div>
                <input type="checkbox" name="rememeber" id="rememberme" />
                <label className="ml-3  font-normal" htmlFor="rememberme">
                  Remember me
                </label>
              </div>
              <div className="font-medium text-loginblue cursor-pointer">
                Forgot password?
              </div>
            </div>
            <Button
              style="p-4 text-white font-medium w-full bg-loginblue rounded-full"
              text="Login"
              submit={true}
            />
          </form>
        ) : (
          <form></form>
        )}
        <div className="font-medium">
          Not registered yet?{" "}
          <span className="font-medium text-loginblue cursor-pointer">
            Create an account
          </span>
        </div>
        <p className="absolute bottom-10 text-gray-500">
          all rights owned by niranj
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
