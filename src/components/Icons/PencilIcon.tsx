import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'

export const PencilIcon = (props: SvgProps) => (
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
        <Path d="M4 20h4L18.5 9.5a1.5 1.5 0 0 0-4-4L4 16v4M13.5 6.5l4 4" />
    </Svg>
)
