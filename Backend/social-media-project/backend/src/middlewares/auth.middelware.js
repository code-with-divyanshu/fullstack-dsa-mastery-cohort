const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const authMiddleware = async (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({
      message: "Unauthorize Access, Please Login First",
    });
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

    const user = await userModel.findOne({
      _id: decoded.id,
    });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorize - Invalid Token",
    });
  }
};

module.exports = authMiddleware;
