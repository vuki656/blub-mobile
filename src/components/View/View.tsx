import React from 'react'
import { View as DefaultView } from 'react-native'

import { Colors } from '../../shared/constants'

import type { ViewProps } from './View.types'

export const View = (props: ViewProps) => {
    const {
        style,
        ...otherProps
    } = props

    return (
        <DefaultView
            style={[
                { backgroundColor: Colors.background.root },
                style,
            ]}
            {...otherProps}
        />
    )
}
