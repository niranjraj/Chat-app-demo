import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

export default async function connectDB() {
  try {
    console.log(mongoURI);
    if (mongoURI) {
      await mongoose
        .connect(mongoURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as ConnectOptions)
        .then((res) => console.log("connected to database"));
    }
  } catch (e) {
    console.error("Authentication failed for MongoDB");
    console.log(e);
  }
}
