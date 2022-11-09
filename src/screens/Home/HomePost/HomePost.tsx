import React from 'react'

import {
    Button,
    Text,
    View,
} from '../../../components'
import { ShareIcon } from '../../../components/Icons'
import { VoteTypeEnum } from '../../../graphql/types.generated'
import { formatDate } from '../../../shared/date'

import { styles } from './HomePost.styles'
import type { HomePostProps } from './HomePost.types'

export const HomePost = (props: HomePostProps) => {
    const {
        post,
    } = props

    const positiveVotes = post.votes.filter((vote) => {
        return vote.type === VoteTypeEnum.Positive
    })

    const negativeVotes = post.votes.filter((vote) => {
        return vote.type === VoteTypeEnum.Negative
    })

    return (
        <View style={styles.root}>
            <Text style={styles.date}>
                {formatDate(post.createdAt)}
            </Text>
            <Text style={styles.text}>
                {post.text}
            </Text>
            <View style={styles.buttons}>
                <Button style={styles.button}>
                    <Text style={styles.buttonVoteCount}>
                        {positiveVotes.length}
                    </Text>
                    <Text>
                        Like
                    </Text>
                </Button>
                <Button style={styles.button}>
                    <Text style={styles.buttonVoteCount}>
                        {negativeVotes.length}
                    </Text>
                    <Text>
                        Disklike
                    </Text>
                </Button>
                <Button style={styles.button}>
                    <Text>
                        Comment
                    </Text>
                </Button>
                <Button style={styles.button}>
                    {/* TODO: fix color so its not hard-coded */}
                    <ShareIcon color="white" />
                </Button>
            </View>
        </View>
    )
}
