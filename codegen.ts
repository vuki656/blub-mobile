import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    documents: './src/graphql/**/*.gql',
    config: {
        DateTime: 'string',
        JSON: '{ [key: string]: any }'
    },
    hooks: {
        afterAllFileWrite: 'prettier --write'
    },
    generates: {
        './src/graphql/types.generated.ts': {
            config: {
                withHooks: true
            },
            plugins: [
                'typescript',
                'fragment-matcher',
                'typescript-operations',
                'typescript-react-apollo',
            ],
        },
    },
    schema: './schema.graphql',
}

export default config
