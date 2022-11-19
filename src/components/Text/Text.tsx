import { Text as DefaultText } from 'react-native'

import {
    Colors,
    Fonts,
} from '../../shared/constants'

import type { TextProps } from './Text.types'

export const Text = (props: TextProps) => {
    const {
        style,
        ...other
    } = props

    return (
        <DefaultText
            style={[
                {
                    color: Colors.text.default,
                    fontFamily: Fonts.default,
                },
                style,
            ]}
            {...other}
        />
    )
}
