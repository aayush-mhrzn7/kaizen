import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
  {
    postName: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId(),
      ref: "User",
      required: true,
    },
    contributionDate: [
      {
        type: Date,
        required: true,
      },
    ],
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", postSchema);
export default Post;
