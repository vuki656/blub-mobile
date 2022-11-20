import type { z } from 'zod'

import type { postValidation } from './CreatePost.validation'

export type PostFormValueType = z.infer<typeof postValidation>
