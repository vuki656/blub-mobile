import { StyleSheet } from 'react-native'

import {
    Colors,
    Fonts,
} from '../../../shared/constants'

// TODO: extract colors to shared place
export const styles = StyleSheet.create({
    button: {
        borderColor: '#ced4da',
        borderWidth: 1,
        color: 'black',
        flex: 1,
    },
    buttonActive: {
        borderColor: Colors.blue,
        borderWidth: 1,
    },
    buttonComment: {
        marginRight: 10,
    },
    buttonDislike: {
        marginBottom: 5,
    },
    buttonLike: {
        marginBottom: 10,
        marginRight: 10,
    },
    buttonRow: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
    },
    buttonText: {
        fontFamily: Fonts.bold,
    },
    buttonVoteCount: {
        marginRight: 5,
    },
    buttons: {
        backgroundColor: 'transparent',
        display: 'flex',
        marginTop: 5,
    },
    date: {
        color: '#909296',
        marginBottom: 15,
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 10,
        padding: 15,
        width: '100%',
    },
    text: {
        color: '#000000',
        fontSize: 15,
        marginBottom: 10,
    },
})
