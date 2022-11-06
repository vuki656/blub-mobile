import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import type { RootStackParamList } from '../shared/types'

import { BottomTabNavigator } from './BottomNavigator'

/*
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
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
