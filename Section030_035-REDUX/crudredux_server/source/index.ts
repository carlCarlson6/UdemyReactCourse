import {buildSchema} from 'type-graphql';
import { GraphQLSchema } from 'graphql';
import {ApolloServer} from 'apollo-server-express';
import Express from 'express';
import cors from 'cors';

const main = async(): Promise<void> => {
    const schema: GraphQLSchema = await buildSchema({
        resolvers: []
    });

    const apolloServer = new ApolloServer({schema})
    const app = Express();

    app.use(cors({credentials:true, origin:'http://localhost:3000'}))

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => console.log('server is running on localhost:4000/graphql'))
}

main();