const express = require("express");
const port = process.env.port || 8080;
const { ApolloServer } = require("apollo-server-express");
const { PubSub } = require("graphql-subscriptions");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers")
const { createServer } = require("http");
const { execute, subscribe } = require("graphql");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { makeExecutableSchema } = require("@graphql-tools/schema");


async function startServer(){
    require("./config")();

    const app = express();
    app.use(express.json());

    require("./route/members")(app);
    require("./route/skills")(app);

    //subscription
    const pubsub = new PubSub();
    const httpServer = createServer(app);
    const schema = makeExecutableSchema({ typeDefs, resolvers });

    const subscriptionServer = SubscriptionServer.create({
        schema,
        execute,
        subscribe
    }, {
        server: httpServer,
        path: '/graphql'
    });

    const apolloServer = new ApolloServer({
        schema,
        context: ({req, res}) => ({req, res, pubsub}),
        plugins:[{
            async serverWillStart(){
                return{
                    async drainServer(){
                        subscriptionServer.close();
                    }
                };
            }
        }]
    });

    
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });

    //app.listen(port, () => console.log(`server is listening to port ${port}`));
    httpServer.listen(port, () => console.log(`server is listening to port ${port}`));
}

startServer();


