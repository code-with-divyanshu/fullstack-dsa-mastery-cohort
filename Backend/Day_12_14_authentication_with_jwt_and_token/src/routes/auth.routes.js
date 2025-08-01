const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

// register api
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const exisistingUser = await userModel.findOne({
    username,
  });

  if (exisistingUser) {
    return res.status(409).json({
      message: "Username already in use",
    });
  }

  const user = await userModel.create({
    username,
    password,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
  });

  res.status(201).json({
    message: "User Register Successfully",
    user,
  });
});

// login api
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username,
  });

  if (!user) {
    return res.status(401).json({
      message: "User not found invalid username",
    });
  }

  const isPasswordValid = password == user.password;

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Incorrect Password",
    });
  }

  res.status(200).json({
    message: "User LoggedIn Successfully",
  });
});

//  user api

router.get("/user", async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel
      .findOne({
        _id: decoded.id,
      })
      .select("-password");

    res.status(200).json({
      message: "User Data Fetched Successfully",
      user,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized - Invalid Token",
    });
  }
});

module.exports = router;
