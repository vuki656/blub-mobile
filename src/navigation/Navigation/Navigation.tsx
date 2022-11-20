import {
    DarkTheme,
    NavigationContainer,
} from '@react-navigation/native'
import React from 'react'

import { RootNavigator } from '../RootNavigator'

import { linkingConfiguration } from './linkingConfiguration'

export const Navigation = () => {
    return (
        <NavigationContainer
            linking={linkingConfiguration}
            theme={DarkTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    )
}
