import { WebSocketLink } from 'apollo-link-ws';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default new ApolloClient({
    cache: new InMemoryCache(),
    link: new WebSocketLink({
        uri: "wss://painting-group.herokuapp.com/v1/graphql",
        options:{
            reconnect: true
        }
    })
});