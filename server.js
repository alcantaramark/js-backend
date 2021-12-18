import express from "express"
import dotenv from "dotenv";
dotenv.config();
const port = process.env.port || 8080;
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs.js";
import { resolvers, signalRPubSub } from "./resolvers.js"
import { createServer } from "http";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { connectDB } from "./config.js"
import { memberRouter } from "./route/members.js";
import { skillRouter } from "./route/skills.js";

async function startServer(){
    connectDB();

    const app = express();
    app.use(express.json());

    memberRouter(app);
    skillRouter(app);

    const httpServer = createServer(app);
    const schema = makeExecutableSchema({ typeDefs, resolvers });

   
    const apolloServer = new ApolloServer({
        schema,
    });

    
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });
    
    httpServer.listen(port, () => { 
        console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
        console.log(`🚀 Subscriptions ready at ws://localhost:${port}/graphql`);

        signalRPubSub.start()
            .then(() =>  { console.log("🚀 SignalR up and running"); console.log(signalRPubSub) })
            .catch((err) => console.error(err))

    });
}

startServer();


