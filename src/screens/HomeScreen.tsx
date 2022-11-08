import { StyleSheet } from 'react-native'

import {
    Text,
    View,
} from '../components'

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                Home Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})
