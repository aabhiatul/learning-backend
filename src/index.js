// require("dotenv").config("./env");
import dotenv from "dotenv";
import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});
connectDB()
  .then(() => {
    app.on("ERROR", (error) => {
      console.log("Error", error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at Port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed!!!", error);
  });
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
// app.on("ERROR", (error) => {
//   console.log("Error", error);
//   throw error;
// });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (err) {
//     console.log("Error", err);
//     throw err;
//   }
// })();
