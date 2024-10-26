import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
const port = 5050;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connection to the database is a sucess");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Ooops something went wrong", err);
  });
