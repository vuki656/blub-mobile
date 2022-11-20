import React from 'react'
import Svg, {
    Circle,
    Path,
} from 'react-native-svg'

import type { IconProps } from './Icon.types'
import { IconBase } from './IconBase'

export const ShareIcon = (props: IconProps) => (
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
            <Circle
                cx={6}
                cy={12}
                r={3}
            />
            <Circle
                cx={18}
                cy={6}
                r={3}
            />
            <Circle
                cx={18}
                cy={18}
                r={3}
            />
            <Path d="m8.7 10.7 6.6-3.4M8.7 13.3l6.6 3.4" />
        </Svg>
    </IconBase>
)
