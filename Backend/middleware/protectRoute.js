import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        error: "Unauthorized access ",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decode:", decoded);

    if (!decoded) {
      return res.status(401).json({
        error: "Unauthorized token ",
      });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({
        error: "User not found ",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default protectRoute;
