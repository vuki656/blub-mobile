import { StyleSheet } from 'react-native'

import {
    Colors,
    Fonts,
} from '../../shared/constants'

export const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: Fonts.bold,
    },
    date: {
        color: Colors.text.light,
    },
    panel: {
        padding: 15,
    },
    highlightedVoteButton: {
        borderColor: Colors.blue,
        borderWidth: 1,
    },
    reactionButtons: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
    },
    root: {
        flex: 1,
        padding: 10,
    },
    text: {
        fontSize: 15,
    },
})
