const { DataTypes } = require("sequelize");
const { sequelize } = require("../configs/database");

const Grade = sequelize.define(
  "grade",
  {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "grade" }
);

module.exports = Grade;
