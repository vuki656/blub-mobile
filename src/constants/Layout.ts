import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const SMALL_DEVICE_WIDTH = 375

export default {
    isSmallDevice: width < SMALL_DEVICE_WIDTH,
    window: {
        height,
        width,
    },
}
