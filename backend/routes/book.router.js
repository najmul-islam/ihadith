const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getSingleBook,
} = require("../controllers/book.controller");

router.get("/", getAllBooks);
router.get("/:book_name", getSingleBook);

module.exports = router;
