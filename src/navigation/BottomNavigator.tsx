import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import {
    ListIcon,
    PencilIcon,
} from '../components/Icons'
import {
    CreatePostScreen,
    Home,
} from '../screens'
import { Colors } from '../shared/constants'
import { useColorScheme } from '../shared/hooks'
import type { RootTabParamList } from '../shared/types'

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
                component={Home}
                name="Home"
                options={() => ({
                    tabBarIcon: (props) => {
                        return (
                            <ListIcon color={props.color} />
                        )
                    },
                    title: 'Home',
                })}
            />
            <BottomTabNavigatorComponent.Screen
                component={CreatePostScreen}
                name="CreatePost"
                options={{
                    tabBarIcon: (props) => {
                        return (
                            <PencilIcon color={props.color} />
                        )
                    },
                    title: 'Post',
                }}
            />
        </BottomTabNavigatorComponent.Navigator>
    )
}
