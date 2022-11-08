import { View as DefaultView } from 'react-native'

import { useThemeColor } from '../../shared/hooks'

import type { ViewProps } from './View.types'

export const View = (props: ViewProps) => {
    const {
        darkColor,
        lightColor,
        style,
        ...otherProps
    } = props

    const backgroundColor = useThemeColor({
        colorScheme: {
            dark: darkColor,
            light: lightColor,
        },
        surfaceName: 'background',
    })

    return (
        <DefaultView
            style={[{ backgroundColor }, style]}
            {...otherProps}
        />
    )
}
