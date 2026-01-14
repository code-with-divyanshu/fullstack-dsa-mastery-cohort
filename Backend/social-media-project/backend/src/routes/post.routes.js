const express = require("express");
const authMiddleware = require("../middlewares/auth.middelware");
const multer = require("multer");
const {
  createPostController,
  getAllPostController,
  getPostByIdController,
} = require("../controllers/post.controller");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

//  post creation api - (protected)
router.post(
  "/create",
  authMiddleware,
  upload.single("image"),
  createPostController
);

//  get all post

router.get("/", authMiddleware, getAllPostController);

//  get  post by id

router.get("/:id", authMiddleware, getPostByIdController);

module.exports = router;
