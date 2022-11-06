import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from './navigation'
import {
    useCachedResources,
    useColorScheme,
} from './shared/hooks'

export default function App() {
    const isLoadingComplete = useCachedResources()
    const colorScheme = useColorScheme()

    if (!isLoadingComplete) {
        return null
    } else {
        return (
            <SafeAreaProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
            </SafeAreaProvider>
        )
    }
}

registerRootComponent(App)
