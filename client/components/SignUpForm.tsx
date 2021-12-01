import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../redux/slices/userSlice";
import type { RootState } from "../redux/store";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../util/ValidationSchema";
import Button from "../components/Button";
import styles from "../styles/components/auth.module.css";
type user = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
interface Props {
  login: boolean;
}

const SignUpForm: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state.user);
  const { register, handleSubmit, formState, clearErrors } = useForm<user>({
    mode: "onBlur",
    resolver: yupResolver(signUpSchema),
  });
  const { errors } = formState;

  const signUpHandler = (data: user) => {
    dispatch(signUp({ ...data }));
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(signUpHandler)}
      className="flex flex-col mb-7"
    >
      <label htmlFor="userName" className="font-normal mb-1">
        UserName
        <span className="invalid-feedback"> *{errors.userName?.message}</span>
      </label>
      <input
        className={`${styles.inputBtn} focus:border-loginblue`}
        {...register("userName")}
        type="text"
        id="userName"
      />
      <label htmlFor="email" className="font-normal mb-1">
        Email
        <span className="invalid-feedback"> *{errors.email?.message}</span>
      </label>
      <input
        className={`${styles.inputBtn} focus:border-loginblue`}
        {...register("email")}
        type="email"
        id="email"
      />
      <label htmlFor="password" className="font-normal mb-1 ">
        Password
        <span className="invalid-feedback"> *{errors.password?.message}</span>
      </label>
      <input
        className={`${styles.inputBtn} focus:border-loginblue`}
        type="password"
        {...register("password")}
        id="password"
      />

      <label htmlFor="confirmPassword" className="font-normal mb-1 ">
        Confirm Password
        <span className="invalid-feedback">
          *{errors.confirmPassword?.message}
        </span>
      </label>
      <input
        className={`${styles.inputBtn} focus:border-loginblue`}
        type="password"
        {...register("confirmPassword")}
        id="confirmPassword"
      />

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
        text="SignUp"
        submit={true}
      />
    </form>
  );
};

export default SignUpForm;
