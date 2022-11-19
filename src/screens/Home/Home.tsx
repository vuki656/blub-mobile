import React from 'react'
import {
    ActivityIndicator,
    ScrollView,
} from 'react-native'

import { View } from '../../components'
import {
    PostsSortEnum,
    useGetPostsQuery,
} from '../../graphql/types.generated'
import { Colors } from '../../shared/constants'

import { styles } from './Home.styles'
import { HomePost } from './HomePost/HomePost'

export const Home = () => {
    const { data, loading } = useGetPostsQuery({
        variables: {
            args: {
                skip: 0,
                sort: PostsSortEnum.New,
            },
        },
    })

    if (loading) {
        return (
            <View style={styles.root}>
                <ActivityIndicator
                    color={Colors.blue}
                    size="large"
                />
            </View>
        )
    }

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
