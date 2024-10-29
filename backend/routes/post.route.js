import { Router } from "express";
import { verifyJWT } from "../middleware/VerifyJWt.js";
import {
  createPost,
  toggleContributionDate,
  deletePost,
  allPosts,
  getPost,
} from "../controllers/post.controller.js";
const router = Router();
router.route("/create").post(verifyJWT, createPost);
router
  .route("/toggleContributionDate/:postId")
  .post(verifyJWT, toggleContributionDate);
router.route("/delete/:postId").delete(verifyJWT, deletePost);
router.route("/all-posts").get(verifyJWT, allPosts);
router.route("/get-post/:postId").get(verifyJWT, getPost);
export default router;
