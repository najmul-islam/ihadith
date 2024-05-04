const Hadith = require("../models/hadith.model");

const getAllHadith = async (req, res) => {
  try {
    const hadiths = await Hadith.findAll();
    res.status(200).json(hadiths);
  } catch (error) {
    console.error("Error fetching all Hadiths:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSingleHadith = async (req, res) => {
  const { id } = req.params;
  try {
    const hadith = await Hadith.findByPk(id);
    if (!hadith) {
      return res.status(404).json({ error: "Hadith not found" });
    }
    res.status(200).json(hadith);
  } catch (error) {
    console.error("Error fetching single Hadith:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllHadith, getSingleHadith };
