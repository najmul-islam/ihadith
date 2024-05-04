const express = require("express");
const router = express.Router();
const {
  getAllHadith,
  getSingleHadith,
} = require("../controllers/hadith.controller");

router.get("/", getAllHadith);
router.get("/:id", getSingleHadith);

module.exports = router;
