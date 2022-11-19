import React from 'react'
import { Pressable } from 'react-native'

import { Colors } from '../../shared/constants'

import type { ButtonProps } from './Button.types'

export const Button = (props: ButtonProps) => {
    const {
        children,
        style,
        ...other
    } = props

    return (
        <Pressable
            style={[
                {
                    alignItems: 'center',
                    backgroundColor: Colors.background.button,
                    borderColor: Colors.border,
                    borderRadius: 4,
                    borderWidth: 1,
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'row',
                    height: 35,
                    justifyContent: 'center',
                    padding: 5,
                },
                style,
            ]}
            {...other}
        >
            {children}
        </Pressable>
    )
}
