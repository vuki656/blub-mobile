import React, { useRef } from 'react'
import {
    ActivityIndicator,
    RefreshControl,
    ScrollView,
} from 'react-native'

import {
    Button,
    Text,
    View,
} from '../../components'
import {
    PostsSortEnum,
    useGetPostsQuery,
} from '../../graphql/types.generated'
import { Colors } from '../../shared/constants'

import { styles } from './Home.styles'
import { HomePost } from './HomePost/HomePost'

const PAGINATED_POST_LIST_AMOUNT = 20

export const Home = () => {
    const [skipAmount, setSkipAmount] = React.useState(0)

    const scrollViewRef = useRef<ScrollView>(null)

    const { data, loading, refetch } = useGetPostsQuery({
        onCompleted: () => {
            scrollViewRef.current?.scrollTo({
                animated: false,
                y: 0,
            })
        },
        variables: {
            args: {
                skip: skipAmount,
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

    const onNext = () => {
        setSkipAmount((currentSkipAmount) => {
            return currentSkipAmount + PAGINATED_POST_LIST_AMOUNT
        })
    }

    const onPrevious = () => {
        setSkipAmount((currentSkipAmount) => {
            return currentSkipAmount - PAGINATED_POST_LIST_AMOUNT
        })
    }

    const previousButtonDisabled = skipAmount === 0
    const nextButtonDisabled = (skipAmount + PAGINATED_POST_LIST_AMOUNT) >= Number(data?.posts.total)

    return (
        <ScrollView
            ref={scrollViewRef}
            refreshControl={(
                <RefreshControl
                    onRefresh={refetch}
                    refreshing={loading}
                />
            )}
        >
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
            <View style={styles.paginationButtons}>
                <Button
                    disabled={previousButtonDisabled}
                    onPress={onPrevious}
                    style={styles.paginationPreviousButton}
                >
                    <Text
                        style={[
                            styles.paginationButtonText,
                            previousButtonDisabled ? styles.paginationDisabledButtonText : null,
                        ]}
                    >
                        Previous
                    </Text>
                </Button>
                <Button
                    disabled={nextButtonDisabled}
                    onPress={onNext}
                    style={styles.paginationNextButton}
                >
                    <Text
                        style={[
                            styles.paginationButtonText,
                            nextButtonDisabled ? styles.paginationDisabledButtonText : null,
                        ]}
                    >
                        Next
                    </Text>
                </Button>
            </View>
        </ScrollView>
    )
}
