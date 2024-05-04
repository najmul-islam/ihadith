const { DataTypes } = require("sequelize");
const { sequelize } = require("../configs/database");

const Hadith = sequelize.define(
  "hadith",
  {
    hadith_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
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
    narrator: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bn: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ar: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ar_diacless: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    grade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade_color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "hadith" }
);

module.exports = Hadith;
