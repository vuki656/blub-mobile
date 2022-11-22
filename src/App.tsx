import { ApolloProvider } from '@apollo/client'
import {
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { registerRootComponent } from 'expo'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ToastProvider } from 'react-native-toast-notifications'

import { Navigation } from './navigation'
import { client } from './shared/apollo'
import { StorageKeys } from './shared/constants'
import { useCachedResources } from './shared/hooks'
import { uuid } from './shared/utils'

// TODO: migrate to style guide
// TODO: navigation should be done like this https://reactnavigation.org/docs/typescript/#nesting-navigators
// TODO: rename folders to be better
export default function App() {
    const isLoadingComplete = useCachedResources()

    const { getItem, setItem } = useAsyncStorage(StorageKeys.userId)

    let [fontsLoaded] = useFonts({
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    })

    const setUserId = async () => {
        const existingUserId = await getItem()

        if (!existingUserId) {
            void setItem(uuid())
        }
    }

    useEffect(() => {
        void setUserId()
    })

    if (!isLoadingComplete || !fontsLoaded) {
        return null
    }

    return (
        <SafeAreaProvider>
            <Navigation />
            <StatusBar style="light" />
        </SafeAreaProvider>
    )
}

const AppWithProviders = (
    <ApolloProvider client={client}>
        <ToastProvider>
            <App />
        </ToastProvider>
    </ApolloProvider>
)

registerRootComponent(() => AppWithProviders)
