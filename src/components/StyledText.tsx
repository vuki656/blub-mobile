import type { TextProps } from './Themed'
import { Text } from './Themed'

export const MonoText = (props: TextProps) => {
    return (
        <Text
            {...props}
            style={[props.style, { fontFamily: 'space-mono' }]}
        />
    )
}
