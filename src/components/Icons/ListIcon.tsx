import React from 'react'
import Svg, {
    Path,
    Rect,
} from 'react-native-svg'

import type { IconProps } from './Icon.types'
import { IconBase } from './IconBase'

export const ListIcon = (props: IconProps) => (
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
            <Rect
                height={18}
                rx={2}
                width={14}
                x={5}
                y={3}
            />
            <Path d="M9 7h6M9 11h6M9 15h4" />
        </Svg>
    </IconBase>
)
