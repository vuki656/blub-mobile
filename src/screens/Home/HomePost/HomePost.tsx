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
    const { post } = props

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
        void Share.share({
            message: `${currentPost.text.slice(0, SHARE_TEXT_CUTOFF_CHARACTER)}...`,
            title: 'Blubtalk | What\'s on your mind?',
            url: 'www.google.com', // TODO: implement once single view is done
        })
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
                            styles.buttonLike,
                            currentPost.userVote === VoteTypeEnum.Positive ? styles.buttonActive : null,
                        ]}
                    >
                        <Text
                            style={[
                                styles.buttonText,
                                styles.voteCountText,
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
                            styles.buttonDislike,
                            currentPost.userVote === VoteTypeEnum.Negative ? styles.buttonActive : null,
                        ]}
                    >
                        <Text
                            style={[
                                styles.buttonText,
                                styles.voteCountText,
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
                        style={styles.buttonComment}
                    >
                        <Text style={styles.buttonText}>
                            Comment
                        </Text>
                    </Button>
                    <Button
                        onPress={onShare}
                        style={styles.buttonShare}
                    >
                        <ShareIcon color="white" />
                    </Button>
                </View>
            </View>
        </Panel>
    )
}
