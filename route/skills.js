import express from "express";

import { getAllSkills } from "../controller/skills.js";

export const skillRouter = app => {
    var router = express.Router();

    router.get("/", getAllSkills);
    app.use("/api/skills", router);
}