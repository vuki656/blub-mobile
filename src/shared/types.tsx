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
    Root: NavigatorScreenParams<RootTabParamList> | undefined
}

export type RootTabParamList = {
    CreatePost: undefined
    Home: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
>
