import type { ViewProps } from '../../../components'
import type { PostType } from '../../../graphql/types.generated'

export type HomePostProps = ViewProps & {
    post: PostType
}
