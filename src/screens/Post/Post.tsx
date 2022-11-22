import React from 'react'

import { Text } from '../../components'
import { RootStackScreenProps, RootTabScreenProps } from '../../shared/types'

// TODO: figure out how to navigate to a post screen
// https://reactnavigation.org/docs/screen-options-resolution ????????
export const Post = (props: RootStackScreenProps<'Post'>) => {
    console.log('props: ', props.route.params.postId)

    return (
        <Text>
            Hi
        </Text>
    )
}
