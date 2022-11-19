import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import type { RootStackParamList } from '../shared/types'

import { BottomTabNavigator } from './BottomNavigator'
import { Logo } from './Logo'

const StackNavigatorComponent = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
    return (
        <StackNavigatorComponent.Navigator>
            <StackNavigatorComponent.Screen
                component={BottomTabNavigator}
                name="Root"
                options={{
                    headerTitle: () => {
                        return <Logo />
                    },
                }}
            />
        </StackNavigatorComponent.Navigator>
    )
}
