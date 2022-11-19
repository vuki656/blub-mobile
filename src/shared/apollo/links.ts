import { createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { StorageKeys } from '../constants'

const httpLink = createHttpLink({
    uri: 'https://blub-api-mm3gj.ondigitalocean.app/', // TODO: env variable
})

const authLink = setContext(async () => {
    const userId = await AsyncStorage.getItem(StorageKeys.userId)

    return {
        headers: {
            authorization: userId,
        },
    }
})

export const link = authLink.concat(httpLink)
