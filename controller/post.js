const Post = require("../model/post");

exports.getAllPosts = async (req, res) => {
    const posts = await Post.find();
    res.status(200).json(posts);
};