const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const database = require("./configs/database");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
app.use("/api/books", require("./routes/book.router"));
app.use("/api/chapter", require("./routes/chapter.router"));
app.use("/api/hadith", require("./routes/hadith.router"));
app.use("/api/section", require("./routes/section.router"));

// middleware
app.use(require("./middlewares/notfound.middleware"));
app.use(require("./middlewares/error.middleware"));

const start = async () => {
  try {
    await database();
    app.listen(
      process.env.PORT,
      console.log(`app is listening port ${process.env.PORT}...`.blue.underline)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
