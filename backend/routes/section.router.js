const express = require("express");
const router = express.Router();
const {
  getAllSection,
  getSingleSection,
} = require("../controllers/section.controller");

router.get("/", getAllSection);
router.get("/:id", getSingleSection);

module.exports = router;
