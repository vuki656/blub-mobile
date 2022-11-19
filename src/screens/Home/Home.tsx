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
    ClockIcon,
    StarIcon,
} from '../../components/Icons'
import {
    PostsSortEnum,
    useGetPostsQuery,
} from '../../graphql/types.generated'
import { Colors } from '../../shared/constants'

import { styles } from './Home.styles'
import { HomePost } from './HomePost/HomePost'

const PAGINATED_POST_LIST_AMOUNT = 20
const SORT_BY_NEW_DAYS_AMOUNT = 100_000
const DEFAULT_POPULAR_DAYS_SORT = 7

// TODO: clean up constants naming
export const Home = () => {
    const [skipAmount, setSkipAmount] = React.useState(0)
    const [sortDays, setSortDays] = React.useState<number | null>(null)
    const [sortType, setSortType] = React.useState(PostsSortEnum.New)

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
                days: sortDays,
                skip: skipAmount,
                sort: sortType,
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

    const resetPagination = () => {
        setSkipAmount(0)
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

    const onNewPress = () => {
        setSortType(PostsSortEnum.New)

        setSortDays(null)
        
        resetPagination()
    }

    const onPopularPress = () => {
        setSortType(PostsSortEnum.Popular)

        setSortDays(DEFAULT_POPULAR_DAYS_SORT)
    }

    const onDaysSortPress = (days: number) => {
        return () => {
            setSortDays(days)
        }
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
            <View style={styles.filterButtons}>
                <Button style={styles.filterButton} onPress={onNewPress}>
                    <ClockIcon />
                    <Text>
                        New
                    </Text>
                </Button>
                <Button style={styles.filterButton} onPress={onPopularPress}>
                    <StarIcon />
                    <Text>
                        Popular
                    </Text>
                </Button>
            </View>
            {sortDays === null ? null : (
                <View style={styles.filterPopularCategoriesButtons}>
                    <Button onPress={onDaysSortPress(DEFAULT_POPULAR_DAYS_SORT)}>
                        <Text>
                            {DEFAULT_POPULAR_DAYS_SORT} Days
                        </Text>
                    </Button>
                    <Button onPress={onDaysSortPress(30)}>
                        <Text>
                            30 Days
                        </Text>
                    </Button>
                    <Button onPress={onDaysSortPress(100_000)}>
                        <Text>
                            All Time
                        </Text>
                    </Button>
                </View>
            )}
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
