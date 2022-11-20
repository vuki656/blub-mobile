import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { IconProps } from './Icon.types'
import { IconBase } from './IconBase'

export const PencilIcon = (props: IconProps) => (
    <IconBase {...props}>
        <Svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            {...props}
        >
            <Path
                d="M0 0h24v24H0z"
                stroke="none"
            />
            <Path d="M4 20h4L18.5 9.5a1.5 1.5 0 0 0-4-4L4 16v4M13.5 6.5l4 4" />
        </Svg>
    </IconBase>
)
