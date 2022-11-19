import {
    ApolloClient,
    InMemoryCache,
} from '@apollo/client'

import { link } from './links'

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
})
