import React from 'react'
import { Share } from 'react-native'

import {
    Button,
    Panel,
    Text,
    View,
} from '../../components'
import { ShareIcon } from '../../components/Icons'
import {
    useCreateVoteMutation,
    useGetPostQuery,
    VoteTypeEnum,
} from '../../graphql/types.generated'
import { formatDate } from '../../shared/date'
import type { RootStackScreenProps } from '../../shared/types'

import { styles } from './Post.styles'

const SHARE_TEXT_CUTOFF_CHARACTER = 40
const BUTTON_GAP = 5

// TODO: why are generated dates 'any' type ?????????????
export const Post = (props: RootStackScreenProps<'Post'>) => {
    const { navigation, route } = props

    const { data, refetch } = useGetPostQuery({
        variables: {
            args: {
                id: route.params.postId,
            },
        },
    })

    const [createVoteMutation] = useCreateVoteMutation({
        onCompleted: (response) => {
            void refetch()
        },
    })

    const post = data?.post

    const onVote = (type: VoteTypeEnum) => {
        return () => {
            if (!post?.id || post.userVote) {
                return
            }

            void createVoteMutation({
                variables: {
                    input: {
                        postId: post.id,
                        type,
                    },
                },
            })
        }
    }

    // TODO: link not included in share
    const onShare = () => {
        void Share.share({
            message: `${post?.text.slice(0, SHARE_TEXT_CUTOFF_CHARACTER)}...`,
            title: 'Blubtalk | What\'s on your mind?',
            url: `https://www.blubtalk.com/posts/${route.params.postId}`,
        })
    }

    const positiveVotes = post?.votes.filter((vote) => {
        return vote.type === VoteTypeEnum.Positive
    })

    const negativeVotes = post?.votes.filter((vote) => {
        return vote.type === VoteTypeEnum.Negative
    })

    return (
        <View
            gap={{ vertical: 10 }}
            style={styles.root}
        >
            <Panel
                gap={{ vertical: 20 }}
                style={styles.panel}
            >
                <Text style={styles.date}>
                    {formatDate(post?.createdAt)}
                </Text>
                <Text style={styles.text}>
                    {post?.text}
                </Text>
                <View
                    gap={{ horizontal: 10 }}
                    style={styles.reactionButtons}
                >
                    <Button
                        onPress={onVote(VoteTypeEnum.Positive)}
                        style={post?.userVote === VoteTypeEnum.Positive ? styles.highlightedVoteButton : null}
                    >
                        <View
                            gap={{ horizontal: BUTTON_GAP }}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>
                                {positiveVotes?.length === 0 ? '' : positiveVotes?.length}
                            </Text>
                            <Text style={styles.buttonText}>
                                Like
                            </Text>
                        </View>
                    </Button>
                    <Button
                        onPress={onVote(VoteTypeEnum.Negative)}
                        style={post?.userVote === VoteTypeEnum.Negative ? styles.highlightedVoteButton : null}
                    >
                        <View
                            gap={{ horizontal: BUTTON_GAP }}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>
                                {negativeVotes?.length === 0 ? '' : negativeVotes?.length}
                            </Text>
                            <Text style={styles.buttonText}>
                                Dislike
                            </Text>
                        </View>
                    </Button>
                    <Button onPress={onShare}>
                        <View
                            gap={{ horizontal: BUTTON_GAP }}
                            style={styles.button}
                        >
                            <ShareIcon />
                            <Text style={styles.buttonText}>
                                Share
                            </Text>
                        </View>
                    </Button>
                </View>
            </Panel>
        </View>
    )
}
