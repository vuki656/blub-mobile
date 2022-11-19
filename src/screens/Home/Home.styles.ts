import { StyleSheet } from 'react-native'

import {
    Colors,
    Fonts,
} from '../../shared/constants'

const HORIZONTAL_SPACING = 20

export const styles = StyleSheet.create({
    filterPopularCategoriesButtons: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: HORIZONTAL_SPACING,
        paddingVertical: 10,
    },
    filterButton: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: HORIZONTAL_SPACING,
    },
    filterButtons: {
        display: 'flex',
        flexDirection: 'row',
    },
    paginationButtonText: {
        fontFamily: Fonts.bold,
    },
    paginationButtons: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: HORIZONTAL_SPACING,
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
        paddingHorizontal: HORIZONTAL_SPACING,
    },
})
