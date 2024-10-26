import Post from "../database/post.model.js";

const createPost = async (req, res) => {
  try {
    const { postName } = req.body;
    const createdBy = req.user._id;
    console.log(postName);
    console.log(createdBy);
    if (!postName) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const post = new Post({
      postName,
      createdBy,
    });
    await post.save();
    console.log(post);
    if (!post) {
      return res.status(400).json({ message: "Error creating post" });
    }
    return res
      .status(400)
      .json({ message: "Post created successfully", post: post });
  } catch (error) {
    console.log(error);
  }
};
const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    if (!postId) {
      return res.status(400).json({ message: "Post Id is required" });
    }
    const post = await Post.findByIdAndDelete(postId);
    if (!post) {
      return res.status(400).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Error deleting post" });
  }
};
const toggleContributionDate = async (req, res) => {
  const { postId } = req.params;
  const { date } = req.body;
  if (!postId) {
    return res.status(400).json({ message: "Post Id is required" });
  }
  const post = await Post.findById(postId);
  try {
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (!post.date) {
      post.date = date;
      post.value = 2;
      await post.save();
      return res.status(200).json({
        message: "Post date has been successfully toggled",
        post,
      });
    } else {
      post.date = null;
      post.value = 0;
      await post.save();
      return res.status(200).json({
        message: "Post date has been successfully toggled",
        post,
      });
    }
  } catch (error) {
    return res.status(400).json({ message: "Error toggling post date" });
  }
};
const allPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    if (!posts) {
      return res.status(404).json({ message: "No posts found" });
    }
    return res
      .status(200)
      .json({ message: "sucessfully fetched all the posts", posts: posts });
  } catch (error) {
    return res.status(400).json({ message: "Error fetching posts" });
  }
};
export { createPost, deletePost, toggleContributionDate, allPosts };
