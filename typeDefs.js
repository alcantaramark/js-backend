const { gql } = require("apollo-server-express");

const typeDefs = gql`
    input MemberInput{
        firstName: String
        lastName: String
        email: String
        jobTitle: String
        profilePicture: String
        profileDescription: String
        skills: [String]
    }

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
    }
    
    type Mutation{
        createMember(member: MemberInput): Member
        deleteMember(id: ID): String
    }`;
    
module.exports = typeDefs;    