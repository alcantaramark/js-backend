const Members = require("../model/members");

exports.getAllMembers = (req, res) => {
        Members.find()
        .then(data => res.status(200).send(data))
        .catch(e => { 
            res.status(500).send({ message: e.message })
        });
};