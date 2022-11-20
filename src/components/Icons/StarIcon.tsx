import React from 'react'
import Svg, { Path } from 'react-native-svg'

import type { IconProps } from './Icon.types'
import { IconBase } from './IconBase'

export const StarIcon = (props: IconProps) => (
    <IconBase {...props}>
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
            <Path
                d="m12 17.75-6.172 3.245 1.179-6.873-5-4.867
                6.9-1 3.086-6.253 3.086 6.253 6.9 1-5 4.867 1.179 6.873z"
            />
        </Svg>
    </IconBase>
)
