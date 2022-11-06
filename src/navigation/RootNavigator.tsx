import { createNativeStackNavigator } from '@react-navigation/native-stack'

import type { RootStackParamList } from '../shared/types'

import { BottomTabNavigator } from './BottomNavigator'

const StackNavigatorComponent = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
    return (
        <StackNavigatorComponent.Navigator>
            <StackNavigatorComponent.Screen
                component={BottomTabNavigator}
                name="Root"
                options={{ headerShown: false }}
            />
        </StackNavigatorComponent.Navigator>
    )
}
