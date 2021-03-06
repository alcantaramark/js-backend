import {Members} from "./../model/members.js";
import {Skills} from "./../model/skills.js";


export const getAllMembers = (req, res) => {
    const id = req.query.id;
    if(!id)
        Members.find().populate('skills').exec((err, data) => {
            if(err) 
                res.status(500).send({ message: err.message });
            else
                res.status(200).send(data);
        })        
    else
        Members.findById(id).populate('skills').exec((err, data) => {
            if(err) 
                res.status(500).send({ message: err.message });
            else
                res.status(200).send(data)
        });        
};

export const deleteMember = (req, res) => {
    const id = req.params.id;
    
    Members.findByIdAndDelete(id).then(data => {
        if(!data)
            res.status(404).send({ message: `Cannot find id ${id}.`});
        else
            res.status(200).send({ message: `Member with id ${id} is successfully deleted` });
    }).catch(e => res.status(505).send({ message: e.message}));
};

export const getMember = (req, res) => {
    const id = req.params.id;
    
    Members.findById(id).populate('skills').exec((err, data) => {
        if(err) 
            res.status(500).send({ message: err.message });
        else
            res.status(200).send(data)
    });    
};

export const updateMember = (req, res) => {
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

export const createMember = (req, res) => {
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
