import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { Post } from '../screens'
import type { RootStackParamList } from '../shared/types'

import { BottomTabNavigator } from './BottomNavigator'
import { Logo } from './Logo'

const StackNavigatorComponent = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
    return (
        <StackNavigatorComponent.Navigator initialRouteName="Root">
            <StackNavigatorComponent.Screen
                component={BottomTabNavigator}
                name="Root"
                options={{
                    headerTitle: () => {
                        return <Logo />
                    },
                }}
            />
            <StackNavigatorComponent.Group screenOptions={{ presentation: 'card' }}>
                <StackNavigatorComponent.Screen
                    component={Post}
                    name="Post"
                />
            </StackNavigatorComponent.Group>
        </StackNavigatorComponent.Navigator>
    )
}
