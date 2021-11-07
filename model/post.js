const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    _id: { type: String }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;