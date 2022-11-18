import { View as DefaultView } from 'react-native'

import { Colors } from '../../shared/constants'
import { useThemeColor } from '../../shared/hooks'

import type { PanelProps } from './Panel.types'

export const Panel = (props: PanelProps) => {
    const {
        darkColor,
        lightColor,
        style,
        ...otherProps
    } = props

    const backgroundColor = useThemeColor({
        colorScheme: {
            dark: darkColor ?? Colors.dark.panel,
            light: lightColor ?? Colors.light.panel,
        },
        surfaceName: 'background',
    })

    return (
        <DefaultView
            style={[
                { backgroundColor },
                style,
                {
                    borderRadius: 4,
                    elevation: 1,
                    shadowColor: '#000',
                    shadowOffset: {
                        height: 1,
                        width: 0,
                    },
                    shadowOpacity: 0.18,
                    shadowRadius: 1,
                },
            ]}
            {...otherProps}
        />
    )
}
