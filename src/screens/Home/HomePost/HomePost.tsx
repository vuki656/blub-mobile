import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'

import {
    Button,
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

export const HomePost = (props: HomePostProps) => {
    const { post } = props

    const [currentPost, setCurrentPost] = useState(post)

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

    const positiveVotes = currentPost.votes.filter((vote) => {
        return vote.type === VoteTypeEnum.Positive
    })

    const negativeVotes = currentPost.votes.filter((vote) => {
        return vote.type === VoteTypeEnum.Negative
    })

    return (
        <View style={styles.root}>
            <Text style={styles.date}>
                {formatDate(currentPost.createdAt)}
            </Text>
            <Text style={styles.text}>
                {currentPost.text}
            </Text>
            <View style={styles.buttons}>
                <View style={styles.buttonRow}>
                    <Button
                        onPress={onVote(VoteTypeEnum.Positive)}
                        style={[
                            styles.buttonLike,
                            currentPost.userVote === VoteTypeEnum.Positive ? styles.buttonActive : null,
                        ]}
                    >
                        <Text style={styles.buttonVoteCount}>
                            {positiveVotes.length}
                        </Text>
                        <Text>
                            Like
                        </Text>
                    </Button>
                    <Button
                        onPress={onVote(VoteTypeEnum.Negative)}
                        style={[
                            styles.buttonDislike,
                            currentPost.userVote === VoteTypeEnum.Negative ? styles.buttonActive : null,
                        ]}
                    >
                        <Text style={styles.buttonVoteCount}>
                            {negativeVotes.length}
                        </Text>
                        <Text>
                            Dislike
                        </Text>
                    </Button>
                </View>
                <View style={styles.buttonRow}>
                    <Button style={styles.buttonComment}>
                        <Text>
                            Comment
                        </Text>
                    </Button>
                    <Button style={styles.buttonShare}>
                        {/* TODO: fix color so its not hard-coded */}
                        <ShareIcon color="white" />
                    </Button>
                </View>
            </View>
        </View>
    )
}
