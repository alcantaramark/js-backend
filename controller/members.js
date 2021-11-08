const Members = require("../model/members");

exports.getAllMembers = (req, res) => {
        Members.find()
        .then(data => res.status(200).send(data))
        .catch(e => res.status(500).send({ message: e.message }));
};

exports.getMember = (req, res) => {
    const id = req.params.id;
    Members.findById(id).then(data => res.status(200).send(data))
        .catch(e => res.status(500).send({ message: e.message }));
};

exports.createMember = (req, res) => {
    console.log(req.body);
    if(!req.body.firstName){
        res.status(400).send({ message: "Content cannot be empty" });
        return;
    }

    const member = new Members({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        skills: req.body.skills
    });

    member.save(member).then(data => res.status(200).send(data))
        .catch(e => res.status(500).send({ message: e.message }));
};