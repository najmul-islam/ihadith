const Chapter = require("../models/chapter.model");
const Section = require("../models/section.model");

const getAllChapter = async (req, res) => {
  try {
    const chpaters = await Chapter.findAll();
    res.status(200).json(chpaters);
  } catch (error) {
    console.error("Error fetching all chapter:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSingleChapter = async (req, res) => {
  const { chapter_id } = req.params;
  try {
    const chapter = await Chapter.findOne({ where: { chapter_id } });
    const section = await Section.findAll({ where: { chapter_id } });

    if (!chapter) {
      return res.status(404).json({ error: "chapter not found" });
    }
    res.status(200).json({ chapter, section });
  } catch (error) {
    console.error("Error fetching single chapter:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllChapter, getSingleChapter };
