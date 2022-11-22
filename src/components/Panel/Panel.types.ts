import type { View as DefaultView } from 'react-native'

import type { ViewProps } from '../View'

export type PanelProps = DefaultView['props'] & ViewProps
