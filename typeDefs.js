import { gql } from "apollo-server-express";


export const typeDefs = gql`
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

    input ConversationInput{
        message: String!,
        dateReceived: String!
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

    type Conversation{
        message: String!,
        dateReceived: String!
    }

    type Subscription{
        newMessage: Conversation
    }

    type Query{
        hello: String
        getAllMembers: [Member],
        getMemberById(id: ID): Member,
        getAllSkills: [Skill],
        getMessage: Conversation
    }
    
    type Mutation{
        createMember(member: MemberInput): Member,
        deleteMember(id: ID): String,
        newMessage(conversation: ConversationInput): Conversation
    }`;
    
//module.exports = typeDefs;    