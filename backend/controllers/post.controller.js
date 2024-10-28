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
  try {
    const { postId } = req.params;
    const { date } = req.body;

    if (!postId) {
      return res.status(400).json({ message: "Post ID is required" });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.date = post.date || {};
    if (post.date[date]) {
      // If date exists, remove it
      const { [date]: _, ...remainingDates } = post.date;
      post.date = remainingDates;
    } else {
      // If date doesn't exist, add it with value 2
      post.date = {
        ...post.date,
        [date]: 2,
      };
    }

    // Update value based on whether any dates exist
    post.value = Object.keys(post.date).length > 0 ? 2 : 0;

    await post.save();
    return res.status(200).json({
      message: "Post date has been successfully toggled",
      post,
    });
  } catch (error) {
    console.error("Error in toggleContributionDate:", error);
    return res.status(500).json({
      message: "Error toggling post date",
      error: error.message,
    });
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
