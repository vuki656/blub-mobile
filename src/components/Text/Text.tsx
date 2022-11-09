import { Text as DefaultText } from 'react-native'

import { Fonts } from '../../shared/constants'
import { useThemeColor } from '../../shared/hooks'

import type { TextProps } from './Text.types'

export const Text = (props: TextProps) => {
    const {
        darkColor,
        lightColor,
        style,
        ...other
    } = props

    const color = useThemeColor({
        colorScheme: {
            dark: darkColor,
            light: lightColor,
        },
        surfaceName: 'text',
    })

    return (
        <DefaultText
            style={[
                {
                    color,
                    fontFamily: Fonts.default,
                },
                style,
            ]}
            {...other}
        />
    )
}
