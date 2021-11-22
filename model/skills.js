const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const Skill = mongoose.model("Skills", skillsSchema);
module.exports = Skill;