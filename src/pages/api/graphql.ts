import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";

import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolver";

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();
const cors = Cors();

export default cors(async (req: MicroRequest, res: ServerResponse) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: process.env.GRAPHQL_ENDPOINT!,
  })(req, res);
});
