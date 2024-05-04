const express = require("express");
const router = express.Router();
const {
  getAllChapter,
  getSingleChapter,
} = require("../controllers/chapter.controller");

router.get("/", getAllChapter);
router.get("/:chapter_id", getSingleChapter);

module.exports = router;
