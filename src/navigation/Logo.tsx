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
            style={{
                alignItems: 'center',
                backgroundColor: 'transparent',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <ChatBubbleIcon color={Colors.blue} />
            <Text
                style={{
                    fontFamily: Fonts.bold,
                    fontSize: 20,
                    marginHorizontal: 10,
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
