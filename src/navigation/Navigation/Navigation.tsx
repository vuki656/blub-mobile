import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from '@react-navigation/native'

import { linkingConfiguration } from '../LinkingConfiguration'
import { RootNavigator } from '../RootNavigator'

import type { NavigationProps } from './Navigation.types'

export const Navigation = (props: NavigationProps) => {
    const { colorScheme } = props

    return (
        <NavigationContainer
            linking={linkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    )
}
