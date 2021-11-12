import express from "express";
import cors from "cors";
import http from "http";
import { Socket } from "socket.io";
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(5000, () => console.log("Server runing"));
