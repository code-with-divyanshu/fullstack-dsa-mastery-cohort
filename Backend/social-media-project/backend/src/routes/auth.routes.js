const express = require("express");
const {
  registerController,
  loginController,
  logoutController,
  userController,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middelware");

const router = express.Router();

// register api
router.post("/register", registerController);

//  login api
router.post("/login", loginController);

//  logout api
router.get("/logout", logoutController);

//  user api
router.get("/user", authMiddleware, userController);

module.exports = router;
