import React from 'react'

import { Colors } from '../../shared/constants'
import { View as DefaultView } from '../View'

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
                    display: 'flex',
                    elevation: 1,
                    flexDirection: 'column',
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
