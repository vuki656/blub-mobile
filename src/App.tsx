import { ApolloProvider } from '@apollo/client'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Navigation } from './navigation'
import { client } from './shared/apollo'
import {
    useCachedResources,
    useColorScheme,
} from './shared/hooks'

export default function App() {
    const isLoadingComplete = useCachedResources()
    const colorScheme = useColorScheme()

    if (!isLoadingComplete) {
        return null
    }

    return (
        <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
        </SafeAreaProvider>
    )
}

const AppWithApollo = (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)

registerRootComponent(() => AppWithApollo)
