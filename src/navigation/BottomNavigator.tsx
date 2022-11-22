import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import {
    ListIcon,
    PencilIcon,
} from '../components/Icons'
import {
    CreatePost,
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
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 15,
                },
                title: '',
            }}
        >
            <BottomTabNavigatorComponent.Screen
                component={Home}
                name="Home"
                options={() => ({
                    tabBarIcon: (props) => {
                        return (
                            <ListIcon
                                color={props.color}
                                size={25}
                            />
                        )
                    },
                })}
            />
            <BottomTabNavigatorComponent.Screen
                component={CreatePost}
                name="CreatePost"
                options={{
                    tabBarIcon: (props) => {
                        return (
                            <PencilIcon
                                color={props.color}
                                size={25}
                            />
                        )
                    },
                }}
            />
        </BottomTabNavigatorComponent.Navigator>
    )
}
