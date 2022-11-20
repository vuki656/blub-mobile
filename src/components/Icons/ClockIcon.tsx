import React from 'react'
import Svg, {
    Circle,
    Path,
} from 'react-native-svg'

import type { IconProps } from './Icon.types'
import { IconBase } from './IconBase'

export const ClockIcon = (props: IconProps) => (
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
            <Circle
                cx={12}
                cy={12}
                r={9}
            />
            <Path d="m12 12 3 2M12 7v5" />
        </Svg>

    </IconBase>
)
