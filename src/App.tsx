import { ApolloProvider } from '@apollo/client'
import {
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'
import { registerRootComponent } from 'expo'
import { useFonts } from 'expo-font'
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

    let [fontsLoaded] = useFonts({
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    })

    if (!isLoadingComplete || !fontsLoaded) {
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
