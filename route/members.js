const express = require("express");

module.exports = app => {
    const { getAllMembers } = require("../controller/members");
    var router = express.Router();

    router.get("/", getAllMembers);
    app.use("/api/members", router);
}