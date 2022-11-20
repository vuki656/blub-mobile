import { StyleSheet } from 'react-native'

import {
    Colors,
    Fonts,
} from '../../../shared/constants'

export const styles = StyleSheet.create({
    buttonActive: {
        borderColor: Colors.blue,
        borderWidth: 1,
    },
    buttonRow: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
    },
    buttonText: {
        fontFamily: Fonts.bold,
    },
    buttonVote: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttons: {
        backgroundColor: 'transparent',
    },
    date: {
        color: Colors.text.light,
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
        width: '100%',
    },
    text: {
        color: Colors.text.default,
        fontSize: 15,
        marginBottom: 20,
        marginTop: 15,
    },
})
