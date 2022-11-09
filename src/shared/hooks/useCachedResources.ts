import * as SplashScreen from 'expo-splash-screen'
import {
    useEffect,
    useState,
} from 'react'

export const useCachedResources = () => {
    const [isLoadingComplete, setLoadingComplete] = useState(false)

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        const loadResourcesAndDataAsync = async () => {
            try {
                void SplashScreen.preventAutoHideAsync()
            } catch (error) {
                // We might want to provide this error information to an error reporting service
                console.warn(error)
            } finally {
                setLoadingComplete(true)

                void SplashScreen.hideAsync()
            }
        }

        void loadResourcesAndDataAsync()
    }, [])

    return isLoadingComplete
}
