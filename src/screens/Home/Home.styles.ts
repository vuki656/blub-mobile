import { StyleSheet } from 'react-native'

import {
    Colors,
    Fonts,
} from '../../shared/constants'

const HORIZONTAL_SPACING = 20

export const styles = StyleSheet.create({
    filterButton: {
        display: 'flex',
        flexDirection: 'row',
    },
    filterButtons: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: HORIZONTAL_SPACING,
    },
    filterPopularCategoriesButtons: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: HORIZONTAL_SPACING,
        paddingVertical: 10,
    },
    paginationButtonText: {
        fontFamily: Fonts.bold,
    },
    paginationButtons: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: HORIZONTAL_SPACING,
        marginVertical: 10,
    },
    paginationDisabledButtonText: {
        color: Colors.text.disabled,
    },
    posts: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: HORIZONTAL_SPACING,
    },
    root: {
        backgroundColor: Colors.background.root,
    },
})
