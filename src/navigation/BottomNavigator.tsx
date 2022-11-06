import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Pressable } from 'react-native'

import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import { Colors } from '../shared/constants'
import { useColorScheme } from '../shared/hooks'
import type {
    RootTabParamList,
    RootTabScreenProps,
} from '../shared/types'

import { TabBarIcon } from './TabBarIcon/TabBarIcon'

const HALF_VISIBLE = 0.5
const FULLY_VISIBLE = 1

/*/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

export const BottomTabNavigator = () => {
    const colorScheme = useColorScheme()

    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}
        >
            <BottomTab.Screen
                component={TabOneScreen}
                name="TabOne"
                options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
                    headerRight: () => (
                        <Pressable
                            onPress={() => {
                                navigation.navigate('Modal')
                            }}
                            style={({ pressed }) => ({
                                opacity: pressed ? HALF_VISIBLE : FULLY_VISIBLE,
                            })}
                        >
                            <FontAwesome
                                color={Colors[colorScheme].text}
                                name="info-circle"
                                size={25}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon
                            color={color}
                            name="code"
                        />
                    ),
                    title: 'Tab One',
                })}
            />
            <BottomTab.Screen
                component={TabTwoScreen}
                name="TabTwo"
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon
                            color={color}
                            name="code"
                        />
                    ),
                    title: 'Tab Two',
                }}
            />
        </BottomTab.Navigator>
    )
}
