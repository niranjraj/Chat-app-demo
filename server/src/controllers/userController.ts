import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import { generateJwtToken, generateRefreshToken } from "../middleware/jwtAuth";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const { userName, email, password, confirmPassword } = req.body;

      console.log(userName);
      if (!userName || !email || !password || !confirmPassword) {
        return res.status(400).json({
          error: true,
          errorMessage: "Invalid field values",
        });
      }
      const userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(400).json({
          error: true,
          errorMessage: "User already Exists",
        });
      }

      const user = await User.create({ userName, email, password });

      if (user) {
        return res.status(201).json({
          _id: user._id,
          userName: user.userName,
          email: user.email,
        });
      } else {
        res.status(400);
        throw new Error("Error:User not created");
      }
    } catch (e) {
      return res.json({
        e,
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.json({ error: true, errorMessage: "Field value is empty" });
      }
      const user = await User.findOne({ email });

      if (user && (await user.passwordCheck(password))) {
        const refToken = generateRefreshToken(user._id);
        return res
          .cookie("refresh_token", refToken, {
            httpOnly: true,
            secure: true,
          })
          .json({
            user: {
              userName: user.userName,
              email: user.email,
              pic: user.profileURL,
            },
            accessToken: generateJwtToken(user._id),
          });
      } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
      }
    } catch (err) {
      return res.json({
        error: true,
        errorMessage: err,
      });
    }
  }

  async token(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.cookies.refresh_token;
      if (token === undefined) {
        res.json("no token");
      }
    } catch (e) {
      console.log("no token");
    }
  }
}
const userControl = new UserController();

export default userControl;
