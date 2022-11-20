import React from 'react'
import { View as DefaultView } from 'react-native'

import { Colors } from '../../shared/constants'

import type { ViewProps } from './View.types'

const HALF = 2

export const View = (props: ViewProps) => {
    const {
        children: childrenProp,
        gap,
        style,
        ...otherProps
    } = props

    let childrenArray = React.Children.toArray(childrenProp)

    if (gap?.horizontal || gap?.vertical) {
        childrenArray = childrenArray.map((child, index) => {
            if (!React.isValidElement(child)) {
                throw new Error('Invalid react child')
            }

            let mappedGap = {}

            // If we only have 2 children, apply half of the gap to both 
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            if (childrenArray.length === 2) {
                if (index === 0) {
                    if (gap.horizontal) {
                        mappedGap = {
                            ...mappedGap,
                            marginRight: gap.horizontal / HALF,
                        }
                    }

                    if (gap.vertical) {
                        mappedGap = {
                            ...mappedGap,
                            marginBottom: gap.vertical / HALF,
                        }
                    }
                }

                if (index === 1) {
                    if (gap.horizontal) {
                        mappedGap = {
                            ...mappedGap,
                            marginLeft: gap.horizontal / HALF,
                        }
                    }

                    if (gap.vertical) {
                        mappedGap = {
                            ...mappedGap,
                            marginTop: gap.vertical / HALF,
                        }
                    }
                }

                return React.cloneElement(child as React.ReactElement, {
                    style: {
                        ...mappedGap,
                        ...child.props.style,
                    },
                })
            }

            // Skip first and last
            if (index === 0 || index === childrenArray.length - 1) {
                return child
            }

            if (gap.horizontal) {
                mappedGap = {
                    ...mappedGap,
                    marginLeft: gap.horizontal / HALF,
                    marginRight: gap.horizontal / HALF,
                }
            }

            if (gap.vertical) {
                mappedGap = {
                    ...mappedGap,
                    marginBottom: gap.vertical / HALF,
                    marginTop: gap.vertical / HALF,
                }
            }

            return React.cloneElement(child as React.ReactElement, {
                style: {
                    ...mappedGap,
                    ...child.props.style,
                },
            })
        })
    }

    return (
        <DefaultView
            children={childrenArray}
            style={[
                { backgroundColor: Colors.background.root },
                style,
            ]}
            {...otherProps}
        />
    )
}
