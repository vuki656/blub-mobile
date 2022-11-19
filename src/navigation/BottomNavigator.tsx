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
import type { RootTabParamList } from '../shared/types'

const BottomTabNavigatorComponent = createBottomTabNavigator<RootTabParamList>()

export const BottomTabNavigator = () => {
    return (
        <BottomTabNavigatorComponent.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.text.default,
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
