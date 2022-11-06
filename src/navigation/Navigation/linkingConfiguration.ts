import type { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import type { RootStackParamList } from '../../shared/types'

export const linkingConfiguration: LinkingOptions<RootStackParamList> = {
    config: {
        screens: {
            Root: {
                screens: {
                    CreatePost: {
                        screens: {
                            CreatePostScreen: 'CreatePostScreen',
                        },
                    },
                    Home: {
                        screens: {
                            HomeScreen: 'HomeScreen',
                        },
                    },
                },
            },
        },
    },
    prefixes: [Linking.createURL('/')],
}
