import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  userName: Yup.string()
    .required("UserName is required")
    .min(6, "UserName must be  6 character or more")
    .max(15, "UserName must be 15 character or less"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
