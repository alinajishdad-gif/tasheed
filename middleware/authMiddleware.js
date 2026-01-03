import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "TASHYEED_SECRET_KEY");
    req.user = decoded;
    next();
  } catch (err) {
    res.sendStatus(403);
  }
};
