const express = require("express");
const { getAllPosts } = require("../controller/post");

const router = express.Router();

router.get("/", getAllPosts);

module.exports = router;