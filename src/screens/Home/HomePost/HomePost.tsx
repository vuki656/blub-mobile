import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'

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

// TODO: use only dark mode and create a ticket for light mode
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
        <Panel style={styles.root}>
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
                            styles.button,
                            styles.buttonLike,
                            currentPost.userVote === VoteTypeEnum.Positive ? styles.buttonActive : null,
                        ]}
                    >
                        <Text
                            style={[
                                styles.buttonText,
                                styles.buttonVoteCount,
                            ]}
                        >
                            {positiveVotes.length}
                        </Text>
                        <Text style={styles.buttonText}>
                            Like
                        </Text>
                    </Button>
                    <Button
                        onPress={onVote(VoteTypeEnum.Negative)}
                        style={[
                            styles.button,
                            styles.buttonDislike,
                            currentPost.userVote === VoteTypeEnum.Negative ? styles.buttonActive : null,
                        ]}
                    >
                        <Text
                            style={[
                                styles.buttonText,
                                styles.buttonVoteCount,
                            ]}
                        >
                            {negativeVotes.length}
                        </Text>
                        <Text style={styles.buttonText}>
                            Dislike
                        </Text>
                    </Button>
                </View>
                <View style={styles.buttonRow}>
                    <Button
                        style={[
                            styles.button,
                            styles.buttonComment,
                        ]}
                    >
                        <Text style={styles.buttonText}>
                            Comment
                        </Text>
                    </Button>
                    <Button style={styles.button}>
                        {/* TODO: fix color so its not hard-coded */}
                        <ShareIcon color="black" />
                    </Button>
                </View>
            </View>
        </Panel>
    )
}
