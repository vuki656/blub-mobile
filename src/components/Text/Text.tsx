import { Text as DefaultText } from 'react-native'

import { useThemeColor } from '../../shared/hooks'

import type { TextProps } from './Text.types'

export const Text = (props: TextProps) => {
    const {
        darkColor,
        lightColor,
        style,
        ...otherProps
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
            style={[{ color }, style]}
            {...otherProps}
        />
    )
}
