const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// register controller
const registerController = async (req, res) => {
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
    password: await bcrypt.hash(password, 10),
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("accessToken", token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });

  res.status(201).json({
    message: "User Created Succesfully",
    user,
  });
};

// login controller
const loginController = async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username,
  });

  if (!user) {
    return res.status(401).json({
      message: "User not found Invalid Username",
    });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(401).json({
      message: "Invalid Password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("accessToken", token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });

  res.status(200).json({
    message: "User logged in Successfully",
    user: {
      id: user._id,
      username: user.username,
    },
  });
};

const userController = (req, res) => {
  const user = req.user;
  res.json({
    message: "Fetched User Successfully",
    user,
  });
};

const logoutController = (req, res) => {
  res.clearCookie("accessToken");

  res.json({
    message: "Log out Successfully",
  });
};

module.exports = {
  registerController,
  loginController,
  userController,
  logoutController,
};
