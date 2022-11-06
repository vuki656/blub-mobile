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
import { ColorSchemeName } from 'react-native'
import { Pressable } from 'react-native'

import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import { Colors } from '../shared/constants'
import { useColorScheme } from '../shared/hooks'
import { 
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
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
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
            }}>
            <BottomTab.Screen
                name="TabOne"
                component={TabOneScreen}
                options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
                    headerRight: () => (
                        <Pressable
                            onPress={() => {
                                navigation.navigate('Modal')
                            }}
                            style={({ pressed }) => ({
                                opacity: pressed ? HALF_VISIBLE_NUMBER : VISIBLE_NUMBER,
                            })}>
                            <FontAwesome
                                name="info-circle"
                                size={25}
                                color={Colors[colorScheme].text}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    title: 'Tab One',
                })}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
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
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}
