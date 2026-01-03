import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// 1. استيراد المسارات (هذا ما عنيته بـ "ثانياً")
import authRoutes from "./routes/auth.js";
import coursesRoutes from "./routes/courses.js";
import certificatesRoutes from "./routes/certificates.js";
import documentRoutes from "./routes/documents.js"; // السطر الجديد للمستندات

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// 2. ربط المسارات (هذا ما عنيته بـ "رابعاً")
app.use("/api/auth", authRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/certificates", certificatesRoutes);
app.use("/api/documents", documentRoutes); // ربط المستندات بالمنصة

app.get("/", (req, res) => {
  res.send("<h1>Tashyeed Platform | Global Infrastructure Ready</h1>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server Live on Port ${PORT}`);
});
