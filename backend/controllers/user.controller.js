import e from "express";
import User from "../database/user.model.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import jwt from "jsonwebtoken";
const createJWTToken = (userID) => {
  return jwt.sign({ id: userID }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
const signupController = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if ([email, password, name].some((field) => field.trim() == "")) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = hashPassword(password);
    const user = await User({ email, password: hashedPassword, name });
    await user.save();
    if (!user) {
      return res.status(500).json({ message: "Error creating user" });
    }
    const token = createJWTToken(user._id);
    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .status(200)
      .json({ message: "Successfully created user", user: user });
  } catch (error) {
    return res.status(400).json("Error occurred in signup", error);
  }
};

// User login controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if ([email, password].some((field) => field.trim() == "")) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User doesn't exist" });
    }
    const doesPasswordMatch = comparePassword(password, user.password);
    if (!doesPasswordMatch) {
      return res
        .status(300)
        .json({ message: "Invalid credentials. Passwords don't match" });
    }
    const JWTToken = createJWTToken(user._id);
    return res
      .cookie("token", JWTToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .status(200)
      .json({ message: "Successfully logged in", user: user });
  } catch (error) {
    return res.status(400).json("Error occurred in login", error);
  }
};
const getUserController = async (req, res) => {
  try {
    const user = await User.findById(req.user?.id);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "sucessfully fetched user Details",
      user: user,
    });
  } catch (error) {
    return res.status(400).json("error occured in fetching user", error);
  }
};
const logoutControllers = async (req, res) => {
  try {
    return res
      .clearCookie("token")
      .status(200)
      .json({ message: "sucessfully logged out" });
  } catch (error) {
    return res.status(400).json("error occured in logout");
  }
};
export {
  signupController,
  loginController,
  getUserController,
  logoutControllers,
};
