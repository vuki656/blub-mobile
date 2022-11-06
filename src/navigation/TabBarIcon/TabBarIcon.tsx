/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons'
import * as React from 'react'

import type { TabBarIconProps } from './TabBarIcon.types'

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export const TabBarIcon = (props: TabBarIconProps) => {
    return (
        <FontAwesome
            size={30}
            style={{ marginBottom: -3 }}
            {...props}
        />
    )
}
