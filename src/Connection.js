import ApolloClient from 'apollo-client';
import { WebSocketLink } from "apollo-link-ws";
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-boost';
import {SubscriptionClient} from 'subscriptions-transport-ws'

// Create an http link:
const httpLink = new HttpLink({
  uri: 'https://....execute-api.region.amazonaws.com/...',
  headers: {
    'Authorization': ...
  }
});

// Create a WebSocket link:
const wsLink = new WebSocketLink(new SubscriptionClient(`wss://....execute-api.region.amazonaws.com/...`, {
  reconnect: true,
  connectionParams: async () => {
    return {
      Authorization: ...
    }
  }
}, undefined, []));

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const gqlClient = new ApolloClient(
  {
      link: link,
      cache: new InMemoryCache()
  }
)