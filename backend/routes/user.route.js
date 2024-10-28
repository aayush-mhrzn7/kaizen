import { Router } from "express";
import {
  getUserController,
  loginController,
  logoutControllers,
  signupController,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/VerifyJWt.js";
const router = Router();
router.route("/signup").post(signupController);
router.route("/login").post(loginController);
router.route("/logout").delete(logoutControllers);
router.route("/get-user").get(verifyJWT, getUserController);

export default router;
