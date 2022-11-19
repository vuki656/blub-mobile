import React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'

export const ChatBubbleIcon = (props: SvgProps) => (
    <Svg
        fill="none"
        height={24}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        width={24}
        {...props}
    >
        <Path
            d="M0 0h24v24H0z"
            stroke="none"
        />
        <Path d="m3 20 1.3-3.9A9 8 0 1 1 7.7 19L3 20" />
    </Svg>
)
