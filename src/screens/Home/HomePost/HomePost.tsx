import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import React from 'react'
import { Share } from 'react-native'

import {
    Button,
    Panel,
    Text,
    View,
} from '../../../components'
import { ShareIcon } from '../../../components/Icons'
import {
    useCreateVoteMutation,
    VoteTypeEnum,
} from '../../../graphql/types.generated'
import { StorageKeys } from '../../../shared/constants'
import { formatDate } from '../../../shared/date'

import { styles } from './HomePost.styles'
import type { HomePostProps } from './HomePost.types'

const SHARE_TEXT_CUTOFF_CHARACTER = 40

export const HomePost = (props: HomePostProps) => {
    const {
        onCommentPress,
        post,
        style,
    } = props

    const [currentPost, setCurrentPost] = React.useState(post)

    const { getItem } = useAsyncStorage(StorageKeys.userId)

    const [createVoteMutation] = useCreateVoteMutation()

    const onVote = (voteType: VoteTypeEnum) => {
        return async () => {
            const userId = await getItem()

            if (!userId || currentPost.userVote) {
                return
            }

            void createVoteMutation({
                variables: {
                    input: {
                        postId: post.id,
                        type: voteType,
                    },
                },
            })

            setCurrentPost(() => {
                return {
                    ...currentPost,
                    userVote: voteType,
                    votes: [
                        ...currentPost.votes,
                        {
                            id: userId,
                            type: voteType,
                            userId,
                        },
                    ],
                }
            })
        }
    }

    const onShare = () => {
        void Share.share({ // eslint-disable-next-line max-len
            message: `${currentPost.text.slice(0, SHARE_TEXT_CUTOFF_CHARACTER)}... https://www.blubtalk.com/posts/${currentPost.id}`,
            title: 'Blubtalk | What\'s on your mind?',
        })
    }

    const positiveVotes = currentPost.votes.filter((vote) => {
        return vote.type === VoteTypeEnum.Positive
    })

    const negativeVotes = currentPost.votes.filter((vote) => {
        return vote.type === VoteTypeEnum.Negative
    })

    return (
        <Panel style={[styles.root, style]}>
            <Text style={styles.date}>
                {formatDate(currentPost.createdAt)}
            </Text>
            <Text style={styles.text}>
                {currentPost.text}
            </Text>
            <View
                gap={{ vertical: 10 }}
                style={styles.buttons}
            >
                <View
                    gap={{ horizontal: 10 }}
                    style={styles.buttonRow}
                >
                    <Button
                        onPress={onVote(VoteTypeEnum.Positive)}
                        style={currentPost.userVote === VoteTypeEnum.Positive ? styles.buttonActive : null}
                    >
                        <View
                            gap={{ horizontal: 5 }}
                            style={styles.buttonVote}
                        >
                            <Text style={styles.buttonText}>
                                {positiveVotes.length}
                            </Text>
                            <Text style={styles.buttonText}>
                                Like
                            </Text>

                        </View>
                    </Button>
                    <Button
                        onPress={onVote(VoteTypeEnum.Negative)}
                        style={currentPost.userVote === VoteTypeEnum.Negative ? styles.buttonActive : null}
                    >
                        <View
                            gap={{ horizontal: 5 }}
                            style={styles.buttonVote}
                        >
                            <Text style={styles.buttonText}>
                                {negativeVotes.length}
                            </Text>
                            <Text style={styles.buttonText}>
                                Dislike
                            </Text>
                        </View>
                    </Button>
                </View>
                <View
                    gap={{ horizontal: 10 }}
                    style={styles.buttonRow}
                >
                    <Button onPress={onCommentPress}>
                        <Text style={styles.buttonText}>
                            Comment
                        </Text>
                    </Button>
                    <Button onPress={onShare}>
                        <ShareIcon />
                    </Button>
                </View>
            </View>
        </Panel>
    )
}
