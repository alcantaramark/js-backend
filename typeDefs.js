const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Member{
        id: ID
        firstName: String
        lastName: String
        email: String
        jobTitle: String,
        profilePicture: String,
        profileDescription: String,
        skills: [Skill]
    }
    
    type Skill{
        id: ID,
        name: String
    }

    type Query{
        hello: String
        getAllMembers: [Member]
    }`;
    
module.exports = typeDefs;    