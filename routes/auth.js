import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, role } = req.body;
  const token = jwt.sign({ email, role }, process.env.JWT_SECRET || "TASHYEED_SECRET_KEY");
  res.json({ token });
});

export default router;
