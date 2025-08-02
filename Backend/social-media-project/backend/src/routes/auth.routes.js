const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

// register api

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await userModel.findOne({
    username,
  });

  if (existingUser) {
    return res.status(409).json({
      message: "Username already in use",
    });
  }

  const user = await userModel.create({
    username,
    password,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("accessToken", token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });

  res.status(201).json({
    message: "User Created Succesfully",
    user,
  });
});

module.exports = router;
