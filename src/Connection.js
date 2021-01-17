import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const httpLink = new HttpLink({
  uri:
    "https://w6tcrg3sb4.execute-api.us-east-1.amazonaws.com/example-example-graphql-api",
  headers: {
    Authorization: "5152fa08-1806-4514-9f66-730e9b59486e",
  },
});

export const gqlClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
