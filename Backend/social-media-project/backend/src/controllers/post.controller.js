const postModel = require("../models/post.model");
const generateCaption = require("../services/ai.service");
const uploadFile = require("../services/storage.service");
const { v4: uuidv4 } = require("uuid");

const createPostController = async (req, res) => {
  const file = req.file;

  const base64Image = Buffer.from(file.buffer).toString("base64");

  const caption = await generateCaption(base64Image);

  const result = await uploadFile(file.buffer, `${uuidv4()}`);

  const post = await postModel.create({
    image: result.url,
    caption: caption,
    user: req.user._id,
  });

  res.status(201).json({
    message: "Post Created Successfully",
    post,
  });
};

//  all post controller

const getAllPostController = async (req, res) => {
  try {
    const posts = await postModel
      .find()
      .populate("user", "username email")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({
      message: "Error Fetching Posts",
      err: err.message,
    });
  }
};

// get post by id

const getPostByIdController = async (req, res) => {
  try {
    const post = await postModel
      .find({ user: req.params.id })
      .populate("user", "username email");

    if (!post)
      return res.status(400).json({
        message: "Post not Found",
      });

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({
      message: "Error Fetching Posts",
      err: err.message,
    });
  }
};

module.exports = {
  createPostController,
  getAllPostController,
  getPostByIdController,
};
