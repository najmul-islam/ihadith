const Book = require("../models/book.model");
const Chapter = require("../models/chapter.model");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching all books:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSingleBook = async (req, res) => {
  const { book_name } = req.params;
  try {
    const book = await Book.findOne({ where: { book_name } });
    const chapter = await Chapter.findAll({ where: { book_name } });

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({ book, chapter });
  } catch (error) {
    console.error("Error fetching single book:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllBooks, getSingleBook };
