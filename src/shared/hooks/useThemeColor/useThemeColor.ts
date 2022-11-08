import { Colors } from '../../constants'
import { useColorScheme } from '../useColorScheme'

import type { useThemeColorInput } from './useThemeColor.types'

export const useThemeColor = (input: useThemeColorInput) => {
    const theme = useColorScheme()

    const colorFromProps = input.colorScheme[theme]

    if (colorFromProps) {
        return colorFromProps
    }

    return Colors[theme][input.surfaceName]
}
