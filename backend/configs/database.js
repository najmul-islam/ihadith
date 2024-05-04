const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./hadith_db.db",
});

const database = async () => {
  try {
    await sequelize.sync();
    console.log("SQLite database connected.".cyan.underline);
  } catch (error) {
    console.error("Error connecting to SQLite database:", error);
  }
};

module.exports = database;
module.exports.sequelize = sequelize;
