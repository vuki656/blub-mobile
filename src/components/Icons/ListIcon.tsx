import * as React from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, {
    Path,
    Rect,
} from 'react-native-svg'

export const ListIcon = (props: SvgProps) => (
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
        <Rect
            height={18}
            rx={2}
            width={14}
            x={5}
            y={3}
        />
        <Path d="M9 7h6M9 11h6M9 15h4" />
    </Svg>
)
