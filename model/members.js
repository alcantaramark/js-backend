const mongoose = require("mongoose");


const membersSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, requred: true},
    email: { type: String, required: true },
    skills: [{type: mongoose.Types.ObjectId, ref: 'Skills'}]
});

const Member = mongoose.model("Members", membersSchema);
module.exports = Member;
