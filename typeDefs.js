const { gql } = require("apollo-server-express");

const typeDefs = gql`
    input MemberInput{
        firstName: String
        lastName: String
        email: String
        jobTitle: String
        profilePicture: String
        profileDescription: String
        skills: [SkillReferenceInput]
    }

    input SkillReferenceInput{
        _id: ID,
        name: String
    }

    type Member{
        _id: ID
        firstName: String
        lastName: String
        email: String
        jobTitle: String,
        profilePicture: String,
        profileDescription: String,
        skills: [Skill]
    }
    
    type Skill{
        _id: ID,
        name: String
    }

    type Query{
        hello: String
        getAllMembers: [Member],
        getMemberById(id: ID): Member
        getAllSkills: [Skill]
    }
    
    type Mutation{
        createMember(member: MemberInput): Member
        deleteMember(id: ID): String
    }`;
    
module.exports = typeDefs;    