const express = require("express");
const authMiddleware = require("../middlewares/auth.middelware");
const multer = require("multer");
const createPostController = require("../controllers/post.controller");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

//  post creation api - (protected)
router.post("/", authMiddleware, upload.single("image"), createPostController);

module.exports = router;
