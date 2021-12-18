import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

export const Skills = mongoose.model("Skills", skillsSchema);
