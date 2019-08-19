import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {onError} from 'apollo-link-error';
import {ApolloLink} from 'apollo-link';
import {WebSocketLink} from 'apollo-link-ws';
import {split} from 'apollo-link';
import {getMainDefinition} from 'apollo-utilities';

// @ts-ignore
const wsLink: ApolloLink = new WebSocketLink({
    uri: process.env.REACT_APP_GRAPHQL_SUBSCRIPTIONS_ENDPOINT,
    options: {
        reconnect: true
    }
});

const httpLink: ApolloLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    credentials: 'same-origin'
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link: ApolloLink = split(
    // split based on operation type
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client: ApolloClient<any> = new ApolloClient({
    link: ApolloLink.from([
        onError(({graphQLErrors, networkError}) => {
            if (graphQLErrors)
                graphQLErrors.forEach(({message, locations, path}) =>
                    console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
            if (networkError) console.error(`[Network error]: ${networkError}`);
        }),
        link
    ]),
    cache: new InMemoryCache()
});

export default client;
