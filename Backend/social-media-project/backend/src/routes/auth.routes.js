const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/auth.controller");

const router = express.Router();

// register api
router.post("/register", registerController);

//  login api
router.post("/login", loginController);

module.exports = router;
