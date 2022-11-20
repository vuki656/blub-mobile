import type { TextInputProps } from 'react-native'

export type InputProps = TextInputProps & {
    error?: boolean
    helperText?: string
}
