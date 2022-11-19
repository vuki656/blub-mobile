import { StyleSheet } from 'react-native'

import {
    Colors,
    Fonts,
} from '../../shared/constants'

export const styles = StyleSheet.create({
    paginationButtonText: {
        fontFamily: Fonts.bold,
    },
    paginationButtons: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    paginationDisabledButtonText: {
        color: Colors.text.disabled,
    },
    paginationNextButton: {
        marginBottom: 10,
        marginLeft: 5,
    },
    paginationPreviousButton: {
        marginRight: 5,
    },
    root: {
        alignItems: 'center',
        backgroundColor: Colors.background.root,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
})
