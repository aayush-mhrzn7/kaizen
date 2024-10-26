import jwt from "jsonwebtoken";
export const verifyJWT = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "token doesnt exist" });
  }
  try {
    const decodedTOken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedTOken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
