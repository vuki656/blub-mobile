import { StyleSheet } from 'react-native'

// TODO: extract colors to shared place
export const styles = StyleSheet.create({
    cardButtons: {
        display: 'flex',
    },
    cardDate: {
        color: '#909296',
        marginBottom: 10,
    },
    cardRoot: {
        backgroundColor: '#1a1b1e',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 10,
        padding: 15,
        width: '100%',
    },
    cardText: {
        color: '#c1c2c5',
    },
    root: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
})