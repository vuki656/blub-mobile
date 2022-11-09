import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, {
    Circle,
    Path,
} from 'react-native-svg'

export const ShareIcon = (props: SvgProps) => (
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
)
