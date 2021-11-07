//Skills
const Skill = require("./model/skills");
const skillData = require("./data/skills.json");

//Members
const Member = require("./model/members");
const memberData = require("./data/members.json");

require("./config")();

const seedData = async() => {
    try{
        await Skill.insertMany(skillData);
        console.log("Skills Added");
        await Member.insertMany(memberData);
        console.log("Members Added");
    }
    catch(err){
        console.error("Error seeding data", err.message);
    }
};
seedData();