import type { View as DefaultView } from 'react-native'

export type ViewProps = DefaultView['props'] & {
    gap?: {
        horizontal?: number
        vertical?: number
    }
}
