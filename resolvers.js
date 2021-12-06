const Member = require("./model/members");
const resolvers = {
    Query: {
        hello: () => { return 'Hello World' },
        getAllMembers: async () => {
            const members = await Member.find().populate('skills');
            return members;
        }
    },
    Mutation:{
        createMember: async (parent, args, context, info) => {
            const { firstName, lastName, email, jobTitle, profilePicture, profileDescription, skills } = args.member;
            const newMember = new Member({
                firstName, lastName, email, jobTitle, profilePicture, profileDescription, skills
            });
            
            const member = await Member.create(newMember);
            return Member.findById(member.id).populate('skills');
        },
        deleteMember: async(parent, { id }, context, info) => {
            await Member.findByIdAndDelete(id);
            return `Deleted member ${id}`;
        }
    }
}; 

module.exports = resolvers;