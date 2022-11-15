import {
    ApolloClient,
    InMemoryCache,
} from '@apollo/client'

import { link } from './links'

// TODO: check how to setup cache
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
})
