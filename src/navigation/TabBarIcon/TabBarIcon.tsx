import { FontAwesome } from '@expo/vector-icons'
import * as React from 'react'

import type { TabBarIconProps } from './TabBarIcon.types'

export const TabBarIcon = (props: TabBarIconProps) => {
    return (
        <FontAwesome
            size={30}
            style={{ marginBottom: -3 }}
            {...props}
        />
    )
}
