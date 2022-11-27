import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import {
    Controller,
    useForm,
} from 'react-hook-form'
import {
    ScrollView,
    Share,
} from 'react-native'

import {
    Button,
    Input,
    Panel,
    Text,
    View,
} from '../../components'
import { ShareIcon } from '../../components/Icons'
import {
    useCreateCommentMutation,
    useCreateVoteMutation,
    useGetPostQuery,
    VoteTypeEnum,
} from '../../graphql/types.generated'
import { formatDate } from '../../shared/date'
import type { RootStackScreenProps } from '../../shared/types'

import { styles } from './Post.styles'
import type { CommentFormType } from './Post.types'
import { commentValidation } from './Post.validation'

const SHARE_TEXT_CUTOFF_CHARACTER = 40
const BUTTON_GAP = 5

export const Post = (props: RootStackScreenProps<'Post'>) => {
    const { route } = props

    const {
        control,
        handleSubmit,
        reset,
    } = useForm<CommentFormType>({
        defaultValues: {
            content: '',
        },
        resolver: zodResolver(commentValidation),
    })

    const { data, refetch } = useGetPostQuery({
        variables: {
            args: {
                id: route.params.postId,
            },
        },
    })

    const [createVoteMutation] = useCreateVoteMutation({
        onCompleted: () => {
            void refetch()
        },
    })

    const [createCommentMutation, { loading: createCommentLoading }] = useCreateCommentMutation({
        onCompleted: () => {
            reset()

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

    const onShare = () => {
        void Share.share({ // eslint-disable-next-line max-len
            message: `${post?.text.slice(0, SHARE_TEXT_CUTOFF_CHARACTER)}... https://www.blubtalk.com/posts/${route.params.postId}`,
            title: 'Blubtalk | What\'s on your mind?',
        })
    }

    const onCommentSubmit = (formValues: CommentFormType) => {
        if (!post) {
            return
        }

        void createCommentMutation({
            variables: {
                input: {
                    content: formValues.content,
                    postId: post.id,
                },
            },
        })
    }

    const positiveVotes = post?.votes.filter((vote) => {
        return vote.type === VoteTypeEnum.Positive
    })

    const negativeVotes = post?.votes.filter((vote) => {
        return vote.type === VoteTypeEnum.Negative
    })

    return (
        <ScrollView style={styles.scrollRoot}>
            <View
                gap={{ vertical: 15 }}
                style={styles.root}
            >
                <Panel
                    gap={{ vertical: 10 }}
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
                    </View>
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
                <Panel
                    gap={{ vertical: 20 }}
                    style={styles.panel}
                >
                    <Controller
                        control={control}
                        name="content"
                        render={({ field, fieldState }) => (
                            <Input
                                error={Boolean(fieldState.error)}
                                helperText={fieldState.error?.message}
                                label="Comment"
                                multiline={true}
                                numberOfLines={8}
                                onBlur={field.onBlur}
                                onChangeText={field.onChange}
                                placeholder="What's on your mind?"
                                value={field.value}
                            />
                        )}
                    />
                    <Button
                        loading={createCommentLoading}
                        onPress={handleSubmit(onCommentSubmit)}
                        style={styles.postCommentButton}
                    >
                        <Text style={styles.postCommentButtonText}>
                            Submit
                        </Text>
                    </Button>
                </Panel>
                {data?.post.comments?.map((comment) => {
                    return (
                        <Panel
                            gap={{ vertical: 10 }}
                            key={comment.id}
                            style={styles.comment}
                        >
                            <Text style={styles.commentPostDate}>
                                {formatDate(comment.createdAt)}
                            </Text>
                            <Text>
                                {comment.content}
                            </Text>
                        </Panel>
                    )
                })}
            </View>
        </ScrollView>
    )
}
