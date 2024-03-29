import React from 'react'
import { TextInput } from 'react-native'

import { Colors } from '../../shared/constants'
import { Text } from '../Text'
import { View } from '../View'

import type { InputProps } from './Input.types'

export const Input = (props: InputProps) => {
    const {
        error,
        helperText,
        label,
        numberOfLines = 4,
        style,
        ...other
    } = props

    return (
        <View
            gap={{ vertical: 10 }}
            style={{ backgroundColor: 'transparent' }}
        >
            {label ? (
                <Text
                    style={{
                        backgroundColor: 'transparent',
                        color: Colors.text.default,
                        fontSize: 12,
                    }}
                >
                    {label}
                </Text>
            ) : null}
            <TextInput
                {...other}
                cursorColor={Colors.blue}
                multiline={true}
                numberOfLines={numberOfLines}
                placeholderTextColor={Colors.text.light}
                style={[
                    {
                        backgroundColor: Colors.background.panel,
                        borderColor: Colors.border,
                        borderRadius: 4,
                        borderWidth: 1,
                        color: Colors.white,
                        padding: 10,
                    },
                    style,
                ]}
                textAlignVertical="top"
            />
            {helperText ? (
                <Text
                    style={{
                        color: error ? Colors.red : Colors.text.light,
                        fontSize: 12,
                    }}
                >
                    {helperText}
                </Text>
            ) : null}
        </View>
    )
}
