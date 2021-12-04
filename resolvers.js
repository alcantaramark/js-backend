const Member = require("./model/members");
const resolvers = {
    Query: {
        hello: () => { return 'Hello World' },
        getAllMembers: async () => {
            const Members = await Member.find().populate('skills');
            return Members;
        }
    }
}; 

module.exports = resolvers;