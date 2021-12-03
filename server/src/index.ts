import express from "express";
import cors from "cors";
import http from "http";

import routes from "./routes";
import connectDB from "./database";
import { Socket } from "socket.io";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  preflightContinue: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/", routes);

app.listen(5000, () => {
  connectDB();
  console.log("Server runing");
});
