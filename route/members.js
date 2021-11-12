const express = require("express");

module.exports = app => {
    const { getAllMembers, getMember, createMember, deleteMember, updateMember } = require("../controller/members");
    var router = express.Router();

    router.get("/:id", getMember);
    router.get("/", getAllMembers);
    router.delete("/:id", deleteMember);
    router.post("/", createMember);
    router.put("/:id", updateMember);
    app.use("/api/members", router);
}