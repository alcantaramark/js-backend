import express from "express";
import { getAllMembers, getMember, createMember, deleteMember, updateMember }  from "./../controller/members.js";

export const memberRouter = app => {
    
    var router = express.Router();

    router.get("/:id", getMember);
    router.get("/", getAllMembers);
    router.delete("/:id", deleteMember);
    router.post("/", createMember);
    router.put("/:id", updateMember);
    app.use("/api/members", router); 
}