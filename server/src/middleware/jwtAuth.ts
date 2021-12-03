import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const ObjectId = mongoose.Schema.Types.ObjectId;

const { TokenExpiredError } = jwt;

const JWT_SECRET = process.env.JWT_SECRET;

interface requestID extends Request {
  userId: string;
  acessToken: string;
}

const catchError = (err: Error, res: Response) => {
  if (err instanceof TokenExpiredError) {
    return res
      .status(401)
      .send({ message: "Unauthorized! Access Token was expired!" });
  }

  return res.sendStatus(401).send({ message: "Unauthorized!" });
};

export function generateJwtToken(id: typeof ObjectId) {
  if (JWT_SECRET) {
    return jwt.sign({ id }, JWT_SECRET, {
      expiresIn: "30s",
    });
  }
}
export function generateRefreshToken(id: typeof ObjectId) {
  if (JWT_SECRET) {
    return jwt.sign({ id }, JWT_SECRET, {
      expiresIn: "90d",
    });
  }
}

function authenticateToken(req: requestID, res: Response, next: NextFunction) {
  let authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(403).send({ message: "No token provided!" });
  }
  const arrayAuth = authHeader.split(" ");
  if (arrayAuth.length != 2 || arrayAuth[0] != "Bearer")
    return res.status(401).json({ error: "The provided token is invalid" });

  const token = arrayAuth[1];

  if (token && JWT_SECRET) {
    jwt.verify(String(token), JWT_SECRET, (err, decoded) => {
      if (err) {
        return catchError(err, res);
      }
      if (decoded) {
        req.userId = decoded.id;
      }

      next();
    });
  }
}
