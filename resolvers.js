import { Members } from "./model/members.js";
import { Skills } from "./model/skills.js";
import dotenv from "dotenv";
import  { SignalRPubSub }from "@aaronpowell/graphql-signalr-subscriptions";

dotenv.config();
const { WEBPUBSUB_CONNECTION_STRING } = process.env;

const NEW_MESSAGE = `NEW_MESSAGE`;

export const signalRPubSub = new SignalRPubSub(WEBPUBSUB_CONNECTION_STRING);

export const resolvers = {
    Query: {
        hello: () => { return 'Hello World' },
        getAllMembers: async () => {
            const members = await Members.find().populate('skills');
            return members;
        },
        getAllSkills: async () => await Skills.find(),
        getMemberById: async(parent, { id }, context, info) => {
            return await Members.findById(id).populate('skills');
        },
        getMessage: () => {
            const conversation = {
                message: "test only",
                dateReceived: "test"
            }
           return conversation;
        }
    },
    Subscription:{
        newMessage: {
            subscribe: () => signalRPubSub.asyncIterator([NEW_MESSAGE])
        }
    },
    Mutation:{
        createMember: async (parent, args, context, info) => {
            const { firstName, lastName, email, jobTitle, profilePicture, profileDescription, skills } = args.member;
            const newMember = new Members({
                firstName, lastName, email, jobTitle, profilePicture, profileDescription, skills
            });
            
            const member = await Members.create(newMember);
            return await Members.findById(member.id).populate('skills');
        },
        deleteMember: async(parent, { id }, context, info) => {
            await Members.findByIdAndDelete(id);
            return `Deleted member ${id}`;
        },
        newMessage: (parent, args, { pubsub }, info) => {
            const conversation = {
                message: args.conversation.message,
                dateReceived: args.conversation.dateReceived
            }

            signalRPubSub.publish([NEW_MESSAGE], { newMessage: conversation });
            return conversation;
        }
    }
}; 


//module.exports ={ resolvers, signalRPubSub };