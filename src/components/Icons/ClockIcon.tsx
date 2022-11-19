import React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, {
    Circle,
    Path,
} from 'react-native-svg'

// TODO: size can prob be adjusted with viewBox
export const ClockIcon = (props: SvgProps) => (
    <Svg
        color="white"
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
            cx={12}
            cy={12}
            r={9}
        />
        <Path d="m12 12 3 2M12 7v5" />
    </Svg>
)
