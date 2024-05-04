const { DataTypes } = require("sequelize");
const { sequelize } = require("../configs/database");

const Book = sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title_ar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_of_hadis: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    abvr_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    book_descr: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Book;
