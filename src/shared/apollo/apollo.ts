import {
    ApolloClient,
    InMemoryCache,
} from '@apollo/client'

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://192.168.0.15:8080/graphql',
})
