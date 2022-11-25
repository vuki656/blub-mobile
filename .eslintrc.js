module.exports = {
    root: true,
    extends: [require.resolve('@rimac-technology/style-guide/eslint/core')],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    ignorePatterns: [
        "**/*.generated.ts",
    ],
    overrides: [
        {
            files: ["**/*.{tsx,jsx}"],
            extends: [require.resolve('@rimac-technology/style-guide/eslint/react')]
        },
    ],
    rules: {
        "import/no-named-default": "off",
        "unicorn/numeric-separators-style": "off",
        "@typescript-eslint/no-magic-numbers": "off",
        "@typescript-eslint/keyword-spacing": "off"
    }
}
