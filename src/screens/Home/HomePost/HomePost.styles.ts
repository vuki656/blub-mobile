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
    buttonComment: {
        marginRight: 5,
        marginTop: 5,
    },
    buttonDislike: {
        marginBottom: 5,
        marginLeft: 5,
    },
    buttonLike: {
        marginBottom: 5,
        marginRight: 5,
    },
    buttonRow: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
    },
    buttonShare: {
        marginLeft: 5,
        marginTop: 5,
    },
    buttonText: {
        fontFamily: Fonts.bold,
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
        marginVertical: 10,
        padding: 15,
        width: '100%',
    },
    text: {
        color: Colors.text.default,
        fontSize: 15,
        marginBottom: 20,
        marginTop: 15,
    },
    voteCountText: {
        marginRight: 5,
    },
})
