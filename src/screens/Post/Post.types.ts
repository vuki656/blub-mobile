import type { z } from 'zod'

import type { commentValidation } from './Post.validation'

export type CommentFormType = z.infer<typeof commentValidation>
