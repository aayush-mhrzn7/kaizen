import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
  {
    postName: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    date: {
      type: String,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  //{{date:2020/10/10, value: 2},{date:2020/10/10, value: 2}}
  { timestamps: true }
);
const Post = mongoose.model("Post", postSchema);
export default Post;
