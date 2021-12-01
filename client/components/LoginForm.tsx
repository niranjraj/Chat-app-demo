import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "../redux/slices/userSlice";
import type { RootState } from "../redux/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../util/ValidationSchema";
import Button from "../components/Button";
import styles from "../styles/components/auth.module.css";
import { useDispatch, useSelector } from "react-redux";
type user = {
  email: string;
  password: string;
};
interface Props {
  login: boolean;
}

const LoginForm: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state.user.userError);
  const user = useSelector((state: RootState) => state.user.user);
  const token = useSelector((state: RootState) => state.user.token);
  console.log(token);
  const { register, handleSubmit, formState } = useForm<user>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });
  const { errors } = formState;

  const loginHandler = (data: user) => {
    dispatch(signIn({ ...data }));
    console.log(selector);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(loginHandler)}
      className="flex flex-col mb-7"
    >
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
      {token && (
        <Button
          style="p-4 text-white font-medium w-full bg-pink-200 rounded-full"
          text="access user"
        />
      )}
    </form>
  );
};

export default LoginForm;
