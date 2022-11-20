import {
    Text,
    View,
} from '../components'
import { ChatBubbleIcon } from '../components/Icons'
import {
    Colors,
    Fonts,
} from '../shared/constants'

export const Logo = () => {
    return (
        <View
            gap={{ horizontal: 20 }}
            style={{
                alignItems: 'center',
                backgroundColor: 'transparent',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <ChatBubbleIcon
                color={Colors.blue}
                size={28}
            />
            <Text
                style={{
                    fontFamily: Fonts.bold,
                    fontSize: 20,
                }}
            >
                Blub
            </Text>
            <Text
                style={{
                    color: Colors.text.light,
                    fontSize: 15,

                }}
            >
                What's on your mind?
            </Text>
        </View>
    )
}
