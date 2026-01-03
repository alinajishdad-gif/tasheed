import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import coursesRoutes from "./routes/courses.js";
import certificatesRoutes from "./routes/certificates.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ربط المسارات الاحترافية للهيكل
app.use("/api/auth", authRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/certificates", certificatesRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Tashyeed Platform Backend | Running Successfully</h1>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
