import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { IconProps } from './Icon.types'
import { IconBase } from './IconBase'

export const ChatBubbleIcon = (props: IconProps) => (
    <IconBase {...props}>
        <Svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        >
            <Path
                d="M0 0h24v24H0z"
                stroke="none"
            />
            <Path d="m3 20 1.3-3.9A9 8 0 1 1 7.7 19L3 20" />
        </Svg>
    </IconBase>
)
