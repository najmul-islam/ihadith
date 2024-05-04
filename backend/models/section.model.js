const { DataTypes } = require("sequelize");
const { sequelize } = require("../configs/database");

const Section = sequelize.define(
  "section",
  {
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chapter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preface: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "section" }
);

module.exports = Section;
