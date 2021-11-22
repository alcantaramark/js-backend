const Members = require("../model/members");

exports.getAllMembers = (req, res) => {
    const id = req.query.id;
    if(!id)
        Members.find()
        .then(data => res.status(200).send(data))
        .catch(e => res.status(500).send({ message: e.message }));
    else
        Members.findById(id)
            .then(data => res.status(200).send(data))
            .catch(e => res.status(500).send({ message: e.message }));
    
    
};

exports.deleteMember = (req, res) => {
    const id = req.params.id;
    
    Members.findByIdAndDelete(id).then(data => {
        if(!data)
            res.status(404).send({ message: `Cannot find id ${id}.`});
        else
            res.status(200).send({ message: `Member with id ${id} is successfully deleted` });
    }).catch(e => res.status(505).send({ message: e.message}));
};

exports.getMember = (req, res) => {
    const id = req.params.id;
    
    Members.findById(id).then(data => res.status(200).send(data))
        .catch(e => res.status(500).send({ message: e.message }));
};

exports.updateMember = (req, res) => {
    console.log(req.body)
    if(!req.body.firstName)
        return res.status(404).send({ message: "Cannot find member to update"});
    
    const id = req.params.id;

    Members.findByIdAndUpdate(id, req.body, {useFindandModify: false}).then(data => { 
            if(!data.firstName)
                res.status(404).send({ message: `Cannot find member ${id}` });
            else    
                res.status(200).send({ message: "Member successfully updated" });
        })
        .catch(e => res.status(500).send({ message: e.message}));
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
        skills: req.body.skills,
        profilePicture: req.body.profilePicture,
        jobTitle: req.body.jobTitle,
        profileDescription: req.body.profileDescription
    });

    member.save(member).then(data => res.status(200).send(data))
        .catch(e => res.status(500).send({ message: e.message }));
};