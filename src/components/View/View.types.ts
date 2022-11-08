import type { View as DefaultView } from 'react-native'

import type { ThemeProps } from '../../shared/types'

export type ViewProps = DefaultView['props'] & ThemeProps
