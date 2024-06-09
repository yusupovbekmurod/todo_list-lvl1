import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.DB)
  .then(console.log("connection"))
  .catch((er) => console.log(er.message));