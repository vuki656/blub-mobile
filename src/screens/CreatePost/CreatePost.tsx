import { zodResolver } from '@hookform/resolvers/zod'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import {
    Controller,
    useForm,
} from 'react-hook-form'
import { useToast } from 'react-native-toast-notifications'

import {
    Button,
    Input,
    Text,
    View,
} from '../../components'
import { useCreatePostMutation } from '../../graphql/types.generated'
import { StorageKeys } from '../../shared/constants'

import { styles } from './CreatePost.styles'
import type { PostFormValueType } from './CreatePost.types'
import { postValidation } from './CreatePost.validation'

export const CreatePost = () => {
    const toast = useToast()
    const { getItem, setItem } = useAsyncStorage(StorageKeys.postDate)
    const isScreenFocused = useIsFocused()

    const [lastPostDate, setLastPostDate] = React.useState<Date | null>(null)

    const getLastPostDate = async () => {
        const lastPostDateIsoString = await getItem()

        if (!lastPostDateIsoString) {
            return
        }

        setLastPostDate(new Date(lastPostDateIsoString))
    }

    useEffect(() => {
        if (isScreenFocused) {
            void getLastPostDate()
        }
    }, [isScreenFocused])

    const isBlocked = dayjs().isBefore(lastPostDate)

    const {
        control,
        handleSubmit,
        reset,
    } = useForm<PostFormValueType>({
        defaultValues: {
            text: '',
        },
        resolver: zodResolver(postValidation),
    })

    const [createPostMutation, { loading }] = useCreatePostMutation({
        onCompleted: () => {
            toast.show('Post created!', {
                duration: 1000,
                type: 'success',
            })

            reset()

            const postDate = dayjs().endOf('day')

            void setItem(postDate.toISOString())

            setLastPostDate(postDate.toDate())
        },
    })

    const onSubmit = (formValue: PostFormValueType) => {
        void createPostMutation({
            variables: {
                input: {
                    text: formValue.text,
                },
            },
        })
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>
                Create Post
            </Text>
            {isBlocked ? (
                <Text style={styles.blockedMessage}>
                    Come back tomorrow to post again.
                </Text>
            ) : null}
            <Controller
                control={control}
                name="text"
                render={({ field, fieldState }) => (
                    <Input
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message}
                        multiline={true}
                        numberOfLines={20}
                        onBlur={field.onBlur}
                        onChangeText={field.onChange}
                        placeholder={'What\'s on your mind?'}
                        value={field.value}
                    />
                )}
            />
            <Button
                disabled={isBlocked}
                loading={loading}
                onPress={handleSubmit(onSubmit)}
                style={styles.submitButton}
            >
                <Text style={styles.submitButtonText}>
                    Submit
                </Text>
            </Button>
        </View>
    )
}
