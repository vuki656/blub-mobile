import { StyleSheet } from 'react-native'

import {
    Colors,
    Fonts,
} from '../../shared/constants'

const HORIZONTAL_SPACING = 20
const VERTICAL_SPACING = 10

export const styles = StyleSheet.create({
    activeFilterButton: {
        borderColor: Colors.blue,
    },
    filterButton: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
    },
    filterButtons: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: VERTICAL_SPACING,
        paddingHorizontal: HORIZONTAL_SPACING,
    },
    filterPopularCategoriesButtons: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: VERTICAL_SPACING,
        paddingHorizontal: HORIZONTAL_SPACING,
    },
    paginationButtonText: {
        fontFamily: Fonts.bold,
    },
    paginationButtons: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: HORIZONTAL_SPACING,
        marginVertical: VERTICAL_SPACING,
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
        paddingVertical: VERTICAL_SPACING,
    },
    root: {
        backgroundColor: Colors.background.root,
    },
})
