const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

// register api
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // check is user name already in database
  const exisistingUser = await userModel.findOne({
    username,
  });

  if (exisistingUser) {
    return res.status(409).json({
      message: "Username already in use",
    });
  }

  // create new user
  const user = await userModel.create({
    username,
    password,
  });

  // create token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  // set token in cookies
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

  // check is username , user is exsist
  const user = await userModel.findOne({
    username,
  });

  if (!user) {
    return res.status(401).json({
      message: "User not found invalid username",
    });
  }

  //  check is password correct
  if (password !== user.password) {
    return res.status(401).json({
      message: "Incorrect Password",
    });
  }

  // create token on login
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
  });

  res.status(200).json({
    message: "User LoggedIn Successfully",
  });
});

//  user api

router.get("/user", async (req, res) => {
  // get token from cookies
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  // deconded token and verify
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // if token correct fetch user details
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

// logout api
router.get("/logout", (req, res) => {
  // clear token from cookie to log out user
  res.clearCookie("token");

  res.status(200).json({
    message: "User logged out successfully",
  });
});

module.exports = router;
