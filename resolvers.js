const Member = require("./model/members");
const Skill = require("./model/skills");
const { PubSub } = require("graphql-subscriptions");

const NEW_MESSAGE = `NEW_MESSAGE`;
const pubsub = new PubSub();

const resolvers = {
    Query: {
        hello: () => { return 'Hello World' },
        getAllMembers: async () => {
            const members = await Member.find().populate('skills');
            return members;
        },
        getAllSkills: async () => await Skill.find(),
        getMemberById: async(parent, { id }, context, info) => {
            return await Member.findById(id).populate('skills');
        }
    },
    Subscription:{
        newMessage: {
            subscribe: () => pubsub.asyncIterator([NEW_MESSAGE])
        }
    },
    Mutation:{
        createMember: async (parent, args, context, info) => {
            const { firstName, lastName, email, jobTitle, profilePicture, profileDescription, skills } = args.member;
            const newMember = new Member({
                firstName, lastName, email, jobTitle, profilePicture, profileDescription, skills
            });
            
            const member = await Member.create(newMember);
            return await Member.findById(member.id).populate('skills');
        },
        deleteMember: async(parent, { id }, context, info) => {
            await Member.findByIdAndDelete(id);
            return `Deleted member ${id}`;
        },
        newMessage: (parent, args, { pubsub }, info) => {
            const conversation = {
                message: args.conversation.message,
                dateReceived: args.conversation.dateReceived
            }

            pubsub.publish([NEW_MESSAGE], { newMessage: conversation });
            return conversation;
        }
    }
}; 


module.exports = resolvers;