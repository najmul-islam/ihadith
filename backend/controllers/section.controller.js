const Section = require("../models/section.model");

const getAllSection = async (req, res) => {
  try {
    const sections = await Section.findAll();
    res.status(200).json(sections);
  } catch (error) {
    console.error("Error fetching all sections:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSingleSection = async (req, res) => {
  const { id } = req.params;
  try {
    const section = await Section.findOne({ where: { id } });
    if (!section) {
      return res.status(404).json({ error: "Section not found" });
    }
    res.status(200).json(section);
  } catch (error) {
    console.error("Error fetching single section:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllSection, getSingleSection };
