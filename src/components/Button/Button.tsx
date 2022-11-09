import React from 'react'
import { Pressable } from 'react-native'

import { useThemeColor } from '../../shared/hooks'

import type { ButtonProps } from './Button.types'

export const Button = (props: ButtonProps) => {
    const {
        children,
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
        surfaceName: 'buttonBackground',
    })

    return (
        <Pressable
            style={[
                {
                    alignItems: 'center',
                    backgroundColor: color,
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: 'row',
                    height: 30,
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
