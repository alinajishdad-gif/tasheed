import express from "express";
const router = express.Router();

// مصفوفة لمحاكاة أنواع المستندات التي تدعمها المنصة
const docs = [
  { id: 1, title: "مخطط إنشائي - فيلا 1", url: "/uploads/docs/plan.pdf", type: "pdf" },
  { id: 2, title: "تقرير التربة", url: "https://docs.google.com/viewer?url=YOUR_URL&embedded=true", type: "external" }
];

router.get("/", (req, res) => {
  res.json(docs);
});

export default router;
