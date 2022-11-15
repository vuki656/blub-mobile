import { StyleSheet } from 'react-native'

import { Colors } from '../../../shared/constants'

// TODO: extract colors to shared place
export const styles = StyleSheet.create({
    buttonActive: {
        borderColor: Colors.blue,
        borderWidth: 1,
    },
    buttonComment: {
        flex: 1,
        marginRight: 10,
    },
    buttonDislike: {
        flex: 1,
        marginBottom: 5,
    },
    buttonLike: {
        flex: 1,
        marginBottom: 10,
        marginRight: 10,
    },
    buttonRow: {
        backgroundColor: '#1a1b1e',
        display: 'flex',
        flexDirection: 'row',
    },
    buttonShare: {
        flex: 1,
    },
    buttonVoteCount: {
        marginRight: 5,
    },
    buttons: {
        backgroundColor: '#1a1b1e',
        display: 'flex',
        gridGap: 100,
    },
    date: {
        color: '#909296',
        marginBottom: 10,
    },
    root: {
        backgroundColor: '#1a1b1e',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 10,
        padding: 15,
        width: '100%',
    },
    text: {
        color: '#c1c2c5',
        marginBottom: 10,
    },
})
