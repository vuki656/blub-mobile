import React from 'react'

import type { IconProps } from './Icon.types'

const DEFAULT_SIZE = 20

export const IconBase = (props: IconProps) => {
    return React.cloneElement(props.children as React.ReactElement, {
        color: props.color ?? 'white',
        height: props.size ?? DEFAULT_SIZE,
        viewBox: '0 0 24 24',
        width: props.size ?? DEFAULT_SIZE,
        ...props.props,
    })
}
