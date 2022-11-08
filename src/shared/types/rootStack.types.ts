import type { NavigatorScreenParams } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import type { RootTabParamList } from './rootTab.types'

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>
