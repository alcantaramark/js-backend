const express = require("express");
const port = process.env.port || 8080;
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers")

async function startServer(){
    require("./config")();

    const app = express();
    app.use(express.json());

    require("./route/members")(app);
    require("./route/skills")(app);

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });

    app.listen(port, () => console.log(`server is listening to port ${port}`));
}

startServer();


