/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { Pressable } from 'react-native'
import type { ColorSchemeName } from 'react-native'

import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import { Colors } from '../shared/constants'
import { useColorScheme } from '../shared/hooks'
import type {
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from '../shared/types'

import LinkingConfiguration from './LinkingConfiguration'

const HALF_VISIBLE_NUMBER = 0.5
const VISIBLE_NUMBER = 1

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                component={BottomTabNavigator}
                name="Root"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                component={NotFoundScreen}
                name="NotFound"
                options={{ title: 'Oops!' }}
            />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen
                    component={ModalScreen}
                    name="Modal"
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
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
                                opacity: pressed ? HALF_VISIBLE_NUMBER : VISIBLE_NUMBER,
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

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    color: string
    name: React.ComponentProps<typeof FontAwesome>['name']
}) {
    return (
        <FontAwesome
            size={30}
            style={{ marginBottom: -3 }}
            {...props}
        />
    )
}
