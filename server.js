import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // استيراد ملف قاعدة البيانات

// استيراد المسارات
import authRoutes from "./routes/auth.js";
import coursesRoutes from "./routes/courses.js";
import certificatesRoutes from "./routes/certificates.js";
import documentRoutes from "./routes/documents.js";

dotenv.config();
const app = express();

// تشغيل الاتصال بقاعدة البيانات
connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ربط المسارات بالمنصة
app.use("/api/auth", authRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/certificates", certificatesRoutes);
app.use("/api/documents", documentRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Tashyeed Platform | Global Infrastructure Ready</h1>");
});

// --- بداية (نظام معالجة الأخطاء) الذي لم تستطع إضافته ---

// 1. معالجة الروابط غير الموجودة (إذا طلب العميل صفحة خطأ)
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: "عذراً، هذا المسار غير موجود في منصة تشييد" 
  });
});

// 2. معالج الأخطاء البرمجية الشامل (لحماية السيرفر من الانهيار)
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err.stack);
  res.status(500).json({ 
    success: false, 
    message: "حدث خطأ فني في السيرفر، جاري الإصلاح!" 
  });
});

// --- نهاية نظام معالجة الأخطاء ---

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server Live on Port ${PORT}`);
});
