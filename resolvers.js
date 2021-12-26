import { Members } from "./model/members.js";
import { Skills } from "./model/skills.js";
import dotenv from "dotenv";
//import  { SignalRPubSub }from "@aaronpowell/graphql-signalr-subscriptions";
import { PubSub } from "graphql-subscriptions";

import * as signalR from '@microsoft/signalr';

dotenv.config();
const { WEBPUBSUB_CONNECTION_STRING } = process.env;

const NEW_MESSAGE = 'NEW_MESSAGE';
const pubsub = new PubSub();
//export const signalRPubSub = new SignalRPubSub(WEBPUBSUB_CONNECTION_STRING);
export const signalRPubSub = new signalR.HubConnectionBuilder()
    .withUrl('https://backend-js-functionapp.azurewebsites.net/api')
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Information)
    .build();

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
        newMessage: (parent, args, _, info) => {
            const conversation = {
                message: args.conversation.message,
                dateReceived: args.conversation.dateReceived
            }
        
            signalRPubSub.send("NewMessage", args.conversation)
                .catch(e => console.log('error', e));
            pubsub.publish(['newMessage'], { newMessage: args.conversation }).then(res => console.log('test', res)).catch(e => console.error('error', e));
            return conversation;
        }
    },
    Subscription:{
        newMessage: {
            subscribe: () => { 
                return pubsub.asyncIterator(['newMessage'])
            }
        }
    },
}; 
