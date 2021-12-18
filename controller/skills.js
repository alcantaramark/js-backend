import { Skills } from  "./../model/skills.js"; 

export const getAllSkills = (req, res) => {
    const id = req.query.id;

    if(!id)
        Skills.find().then(data => res.status(200).send(data))
            .catch(err => res.status(500).send({ message: err.message }));
    else
        Skills.findById(id).then(data => res.status(200).send(data))
            .catch(err => res.status(500).send({ message: err.message }));
};
