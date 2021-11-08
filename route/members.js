const express = require("express");

module.exports = app => {
    const { getAllMembers, getMember, createMember } = require("../controller/members");
    var router = express.Router();

    router.get("/", getAllMembers);
    router.get("/:id", getMember);
    router.post("/", createMember);
    app.use("/api/members", router);
}