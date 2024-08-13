// require("dotenv").config("./env");
import dotenv from "dotenv";
import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";

dotenv.config({
  path: "./.env",
});
console.log(process.env.MONGODB_URI, DB_NAME);
connectDB();
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("ERROR", (error) => {
//       console.log("Error", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (err) {
//     console.log("Error", err);
//     throw err;
//   }
// })();
