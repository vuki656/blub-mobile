import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { Post } from '../screens'
import type { RootStackParamList } from '../shared/types'

import { BottomTabNavigator } from './BottomNavigator'
import { Logo } from './Logo'

const StackNavigatorComponent = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
    return ( // TODO: remove initial route name once done
        <StackNavigatorComponent.Navigator initialRouteName="Post">
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
                    initialParams={{
                        postId: '8206bc5d-3556-4faa-9a65-e608612092b7', // TODO: remove once done
                    }}
                    name="Post"
                />
            </StackNavigatorComponent.Group>
        </StackNavigatorComponent.Navigator>
    )
}
