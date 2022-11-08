import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import {
    CreatePostScreen,
    HomeScreen,
} from '../screens'
import { Colors } from '../shared/constants'
import { useColorScheme } from '../shared/hooks'
import type { RootTabParamList } from '../shared/types'

import { TabBarIcon } from './TabBarIcon'

const BottomTabNavigatorComponent = createBottomTabNavigator<RootTabParamList>()

export const BottomTabNavigator = () => {
    const colorScheme = useColorScheme()

    return (
        <BottomTabNavigatorComponent.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}
        >
            <BottomTabNavigatorComponent.Screen
                component={HomeScreen}
                name="Home"
                options={() => ({
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon
                            color={color}
                            name="list"
                        />
                    ),
                    title: 'Home',
                })}
            />
            <BottomTabNavigatorComponent.Screen
                component={CreatePostScreen}
                name="CreatePost"
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon
                            color={color}
                            name="pencil"
                        />
                    ),
                    title: 'Post',
                }}
            />
        </BottomTabNavigatorComponent.Navigator>
    )
}
