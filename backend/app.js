import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "https://kaizen-seven.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
app.use("/api", userRouter);
app.use("/api", postRouter);
export default app;
