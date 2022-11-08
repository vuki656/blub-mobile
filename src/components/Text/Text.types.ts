import type { Text as DefaultText } from 'react-native'

import type { ThemeProps } from '../../shared/types'

export type TextProps = DefaultText['props'] & ThemeProps
