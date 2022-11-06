/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
    Text as DefaultText,
    View as DefaultView,
} from 'react-native'

import { Colors } from '../shared/constants'
import { useColorScheme } from '../shared/hooks'

export const useThemeColor = (
    props: { dark?: string, light?: string },
    colorName: keyof typeof Colors.dark & keyof typeof Colors.light
) => {
    const theme = useColorScheme()
    const colorFromProps = props[theme]

    if (colorFromProps) {
        return colorFromProps
    } else {
        return Colors[theme][colorName]
    }
}

type ThemeProps = {
    darkColor?: string
    lightColor?: string
}

export type TextProps = DefaultText['props'] & ThemeProps
export type ViewProps = DefaultView['props'] & ThemeProps

export const Text = (props: TextProps) => {
    const { darkColor, lightColor, style, ...otherProps } = props

    const color = useThemeColor({ dark: darkColor, light: lightColor }, 'text')

    return (
        <DefaultText
            style={[{ color }, style]}
            {...otherProps}
        />
    )
}

export const View = (props: ViewProps) => {
    const { darkColor, lightColor, style, ...otherProps } = props
    const backgroundColor = useThemeColor({ dark: darkColor, light: lightColor }, 'background')

    return (
        <DefaultView
            style={[{ backgroundColor }, style]}
            {...otherProps}
        />
    )
}
