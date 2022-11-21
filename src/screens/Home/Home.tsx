import { NetworkStatus } from '@apollo/client'
import React from 'react'
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
const DEFAULT_POPULAR_DAYS_FILTER = 7
const THIRTY_DAYS_POPULAR_DAYS_FILTER = 30
const ALL_TIME_POPULAR_DAYS_FILTER = 100_000

export const Home = () => {
    const [skipAmount, setSkipAmount] = React.useState(0)
    const [sortDays, setSortDays] = React.useState<number | null>(null)
    const [sortType, setSortType] = React.useState(PostsSortEnum.New)

    const scrollViewRef = React.useRef<ScrollView>(null)

    const { data, loading, networkStatus, refetch } = useGetPostsQuery({
        nextFetchPolicy: 'network-only',
        notifyOnNetworkStatusChange: true,
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

        setSortDays(DEFAULT_POPULAR_DAYS_FILTER)

        resetPagination()
    }

    const onDaysSortPress = (days: number) => {
        return () => {
            setSortDays(days)
        }
    }

    const previousButtonDisabled = skipAmount === 0
    const nextButtonDisabled = (skipAmount + PAGINATED_POST_LIST_AMOUNT) >= Number(data?.posts.total)

    if (loading) {
        return (
            <View style={styles.posts}>
                <ActivityIndicator
                    color={Colors.blue}
                    size="large"
                />
            </View>
        )
    }

    return (
        <ScrollView
            ref={scrollViewRef}
            refreshControl={(
                <RefreshControl
                    onRefresh={refetch}
                    refreshing={networkStatus === NetworkStatus.refetch}
                />
            )}
            style={styles.root}
        >
            <View
                gap={{ horizontal: 10 }}
                style={styles.filterButtons}
            >
                <Button
                    onPress={onNewPress}
                    style={sortType === PostsSortEnum.New ? styles.activeFilterButton : null}
                >
                    <View
                        gap={{ horizontal: 5 }}
                        style={styles.filterButton}
                    >
                        <ClockIcon />
                        <Text>
                            New
                        </Text>
                    </View>
                </Button>
                <Button
                    onPress={onPopularPress}
                    style={sortType === PostsSortEnum.Popular ? styles.activeFilterButton : null}
                >
                    <View
                        gap={{ horizontal: 5 }}
                        style={styles.filterButton}
                    >
                        <StarIcon />
                        <Text>
                            Popular
                        </Text>
                    </View>
                </Button>
            </View>
            {sortDays === null ? null : (
                <View
                    gap={{ horizontal: 20 }}
                    style={styles.filterPopularCategoriesButtons}
                >
                    <Button
                        onPress={onDaysSortPress(DEFAULT_POPULAR_DAYS_FILTER)}
                        style={sortDays === DEFAULT_POPULAR_DAYS_FILTER ? styles.activeFilterButton : null}
                    >
                        <Text>
                            {DEFAULT_POPULAR_DAYS_FILTER}
                            {' '}
                            Days
                        </Text>
                    </Button>
                    <Button
                        onPress={onDaysSortPress(THIRTY_DAYS_POPULAR_DAYS_FILTER)}
                        style={sortDays === THIRTY_DAYS_POPULAR_DAYS_FILTER ? styles.activeFilterButton : null}
                    >
                        <Text>
                            {THIRTY_DAYS_POPULAR_DAYS_FILTER}
                            Days
                        </Text>
                    </Button>
                    <Button
                        onPress={onDaysSortPress(ALL_TIME_POPULAR_DAYS_FILTER)}
                        style={sortDays === ALL_TIME_POPULAR_DAYS_FILTER ? styles.activeFilterButton : null}
                    >
                        <Text>
                            All Time
                        </Text>
                    </Button>
                </View>
            )}
            <View
                gap={{ vertical: 15 }}
                style={styles.posts}
            >
                {data?.posts.list.map((post) => {
                    return (
                        <HomePost
                            key={post.id}
                            post={post}
                        />
                    )
                })}
            </View>
            <View
                gap={{ horizontal: 10 }}
                style={styles.paginationButtons}
            >
                <Button
                    disabled={previousButtonDisabled}
                    onPress={onPrevious}
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
