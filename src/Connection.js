import ApolloClient, {split, HttpLink} from '@apollo/client';
import getMainDefinition from '@apollo/client/utilities'
import {WebSocketLink} from '@apollo/client/link/ws'
// import { InMemoryCache } from 'apollo-boost';
import {SubscriptionClient} from 'subscriptions-transport-ws'

// Create an http link:
const httpLink = new HttpLink({
  uri: 'https://w6tcrg3sb4.execute-api.us-east-1.amazonaws.com/example-example-graphql-api',
  headers: {
    'Authorization': 1
  }
});

// Create a WebSocket link:
const wsLink = new WebSocketLink(new SubscriptionClient(`wss://156hxo0ega.execute-api.us-east-1.amazonaws.com/example`, {
  reconnect: true,
  connectionParams: async () => {
    return {
      Authorization: 1
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
      // cache: new InMemoryCache()
  }
)