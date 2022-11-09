import { StyleSheet } from 'react-native'

// TODO: extract colors to shared place
export const styles = StyleSheet.create({
    button: {
        marginBottom: 10,
    },
    buttonVoteCount: {
        marginRight: 5,
    },
    buttons: {
        display: 'flex',
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
