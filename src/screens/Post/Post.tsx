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

    const { data } = useGetPostQuery({
        variables: {
            args: {
                id: route.params.postId,
            },
        },
    })

    const post = data?.post

    const onShare = () => {
        void Share.share({
            message: `${post?.text.slice(0, SHARE_TEXT_CUTOFF_CHARACTER)}...`,
            title: 'Blubtalk | What\'s on your mind?',
            url: 'www.google.com', // TODO: implement once single view is done
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
                    <Button>
                        <View
                            gap={{ horizontal: BUTTON_GAP }}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>
                                {/* // TODO: this shows 0 if no votes, should it be blank */}
                                {positiveVotes?.length}
                            </Text>
                            <Text style={styles.buttonText}>
                                Like
                            </Text>
                        </View>
                    </Button>
                    <Button>
                        <View
                            gap={{ horizontal: BUTTON_GAP }}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>
                                {/* // TODO: this shows 0 if no votes, should it be blank */}
                                {negativeVotes?.length}
                            </Text>
                            <Text style={styles.buttonText}>
                                Dislike
                            </Text>
                        </View>
                    </Button>
                </View>
                {/* // TODO: why is this not expanding to full height ??? */}
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
            </Panel>
        </View>
    )
}
