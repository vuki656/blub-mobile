import React from 'react'
import type {
    StyleProp,
    ViewStyle,
} from 'react-native'
import {
    ActivityIndicator,
    Pressable,
} from 'react-native'

import { Colors } from '../../shared/constants'
import { View } from '../View'

import type { ButtonProps } from './Button.types'

export const Button = (props: ButtonProps) => {
    const {
        children,
        disabled,
        loading,
        style,
        ...other
    } = props

    let conditionalStyles: StyleProp<ViewStyle> = {}

    if (disabled) {
        conditionalStyles = {
            backgroundColor: Colors.background.disabled,
            borderColor: 'transparent',
        }
    }

    return (
        <Pressable
            disabled={disabled}
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
                    minHeight: 35,
                    padding: 5,
                },
                style,
                conditionalStyles,
            ]}
            {...other}
        >
            {loading ? (
                <View
                    gap={{ horizontal: 10 }}
                    style={{
                        backgroundColor: 'transparent',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <ActivityIndicator
                        color={Colors.white}
                        size="small"
                    />
                    {children}
                </View>
            ) : children}
        </Pressable>
    )
}
