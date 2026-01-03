import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// الربط بقاعدة البيانات
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/tasheed";
mongoose.connect(mongoURI)
  .then(() => console.log("✅ تم الاتصال بقاعدة بيانات تشييد"))
  .catch(err => console.error("❌ خطأ في الاتصال:", err));

// واجهة الموقع الرئيسية (تظهر عند فتح الرابط)
app.get("/", (req, res) => {
  res.send(`
    <div style="text-align:center; padding:50px; font-family:Arial; background:#0b1d2a; color:white; height:100vh;">
      <h1 style="color:#ff7a00;">منصة تشييد الهندسيّة</h1>
      <p>نظام هندسي عالمي متكامل - قيد التشغيل الآن</p>
      <div style="margin-top:20px;">
        <button style="padding:10px 20px; background:#ff7a00; border:none; color:white; border-radius:5px;">دخول المهندسين</button>
      </div>
    </div>
  `);
});

// ميزة البحث والدورات
app.get("/api/courses", (req, res) => {
  res.json([
    { id: 1, title: "دورة الإشراف الموقعي", price: "مجاني" },
    { id: 2, title: "دورة التصميم الإنشائي", price: "مجاني" }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('🚀 المنصة تعمل على منفذ ' + PORT));
