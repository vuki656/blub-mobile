import { StyleSheet } from 'react-native'

import {
    Colors,
    Fonts,
} from '../../shared/constants'

export const styles = StyleSheet.create({
    blockedMessage: {
        color: Colors.yellow,
        fontFamily: Fonts.bold,
        fontSize: 13,
        marginBottom: 20,
    },
    root: {
        backgroundColor: Colors.background.root,
        height: '100%',
        padding: 20,
    },
    submitButton: {
        backgroundColor: Colors.blue,
        borderWidth: 0,
        flex: 0,
    },
    submitButtonText: {
        fontFamily: Fonts.bold,
    },
    title: {
        fontFamily: Fonts.bold,
        fontSize: 30,
        marginBottom: 30,
    },
})
