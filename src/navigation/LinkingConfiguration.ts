/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import type { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import type { RootStackParamList } from '../types'

const linking: LinkingOptions<RootStackParamList> = {
    config: {
        screens: {
            Modal: 'modal',
            NotFound: '*',
            Root: {
                screens: {
                    TabOne: {
                        screens: {
                            TabOneScreen: 'one',
                        },
                    },
                    TabTwo: {
                        screens: {
                            TabTwoScreen: 'two',
                        },
                    },
                },
            },
        },
    },
    prefixes: [Linking.createURL('/')],
}

export default linking
