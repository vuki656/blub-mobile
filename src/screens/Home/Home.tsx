import React from 'react'
import { ScrollView } from 'react-native'

import { View } from '../../components'
import {
    PostsSortEnum,
    useGetPostsQuery,
} from '../../graphql/types.generated'

import { styles } from './Home.styles'
import { HomePost } from './HomePost/HomePost'

// TODO: import react everywhere
// TODO: loading
// TODO: dummy cards when loading
// TODO: pull to refresh
// TODO: pagination
export const Home = () => {
    const { data } = useGetPostsQuery({
        variables: {
            args: {
                skip: 0,
                sort: PostsSortEnum.New,
            },
        },
    })

    return (
        <ScrollView>
            <View style={styles.root}>
                {data?.posts.list.map((post) => {
                    return (
                        <HomePost
                            key={post.id}
                            post={post}
                        />
                    )
                })}
            </View>
        </ScrollView>
    )
}
