import { View as DefaultView } from 'react-native'

import { Colors } from '../../shared/constants'

import type { PanelProps } from './Panel.types'

export const Panel = (props: PanelProps) => {
    const {
        style,
        ...otherProps
    } = props

    return (
        <DefaultView
            style={[
                style,
                {
                    backgroundColor: Colors.background.panel,
                    borderRadius: 4,
                    elevation: 1,
                    shadowColor: Colors.shadow.default,
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
