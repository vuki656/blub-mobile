import { StyleSheet } from 'react-native'

import {
    Colors,
    Fonts,
} from '../../shared/constants'

export const styles = StyleSheet.create({
    backButton: {
        backgroundColor: Colors.blue,
    },
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
    comment: {
        padding: 20,
    },
    commentPostDate: {
        color: Colors.text.light,
        fontSize: 12,
    },
    date: {
        color: Colors.text.light,
    },
    highlightedVoteButton: {
        borderColor: Colors.blue,
        borderWidth: 1,
    },
    panel: {
        padding: 15,
    },
    postCommentButton: {
        backgroundColor: Colors.blue,
        borderColor: 'none',
    },
    postCommentButtonText: {
        fontFamily: Fonts.bold,
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
    scrollRoot: {
        backgroundColor: Colors.background.root,
        height: '100%',
    },
    text: {
        fontSize: 15,
    },
})
