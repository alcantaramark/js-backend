const express = require("express");

module.exports = app => {
    const { getAllSkills } = require('../controller/skills');
    var router = express.Router();

    router.get("/", getAllSkills);
    app.use("/api/skills", router);
}