import { default as generateUuid } from 'react-native-uuid'

export const uuid = () => {
    return generateUuid.v4() as string
}
