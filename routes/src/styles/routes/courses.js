import express from "express";
const router = express.Router();

// بيانات تجريبية تحاكي الواقع الهندسي للمنصة
const courses = [
  {
    id: 1,
    title: "دورة التصميم الإنشائي المتكامل",
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID", // رابط يوتيوب
    type: "youtube"
  },
  {
    id: 2,
    title: "شرح قراءة المخططات الموقعية",
    videoUrl: "/uploads/videos/lesson1.mp4", // فيديو خاص مرفوع على المنصة
    type: "local"
  }
];

router.get("/", (req, res) => {
  res.json(courses);
});

export default router;
