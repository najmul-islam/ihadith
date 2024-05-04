const { DataTypes } = require("sequelize");
const { sequelize } = require("../configs/database");

const Chapter = sequelize.define(
  "chapter",
  {
    chapter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hadis_range: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "chapter" }
);

module.exports = Chapter;
