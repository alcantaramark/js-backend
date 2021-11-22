//Skills
const Skill = require("./model/skills");
const skillData = require("./data/skills.json");

//Members
const Member = require("./model/members");
const memberData = require("./data/members.json");

require("./config")();

const seedData = async() => {
    try{
        //await Skill.insertMany(skillData);
        //console.log("Skills Added");
        //await Member.insertMany(memberData);

        const profileDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        await Member.updateMany({}, { 'profileDescription': profileDescription });
        console.log("Members Schema Updated");
    }
    catch(err){
        console.error("Error seeding data", err.message);
    }
};
seedData();