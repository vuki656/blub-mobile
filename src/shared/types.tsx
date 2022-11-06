/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}

export type RootStackParamList = {
    Modal: undefined
    NotFound: undefined
    Root: NavigatorScreenParams<RootTabParamList> | undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>

export type RootTabParamList = {
    TabOne: undefined
    TabTwo: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
>
