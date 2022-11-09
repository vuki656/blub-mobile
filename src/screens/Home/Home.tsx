import {
    Text,
    View,
} from '../../components'
import { PostsSortEnum, useGetPostsQuery } from '../../graphql/types.generated'
import { styles } from './Home.styles'

// TODO: loading
// TODO: dummy cards when loading
export const Home = () => {
    const { data } = useGetPostsQuery({
        variables: {
            args: {
                skip: 0,
                sort: PostsSortEnum.New
            }
        }
    })

    return (
        <View style={styles.container}>
            {data?.posts.list.map((post) => {
                return (
                    <Text key={post.id}>
                        {post.text}
                    </Text>
                )
            })}
        </View>
    )
}
