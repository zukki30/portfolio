import { initUrqlClient } from "next-urql";
import { Client } from "urql";

const GRAPHQL_ENDPOINT = `${process.env.GRAPHQL_DOMAIN!}${process.env.GRAPHQL_ENDPOINT!}`;

export const urqlClient = (): Promise<Client> => {
  return new Promise((resolve, reject) => {
    const client = initUrqlClient(
      {
        url: GRAPHQL_ENDPOINT,
      },
      false
    );

    if (!client) {
      reject(Error("Failed to init initUrqlClient."));
    } else {
      resolve(client);
    }
  });
};
