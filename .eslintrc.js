module.exports = {
    root: true,
    extends: ["@rimac-technology/eslint-config/core", "@rimac-technology/eslint-config/react"],
    parser: "@typescript-eslint/parser",
    ignorePatterns: ["*.generated.*"],
    parserOptions: {
        project: "./tsconfig.json"
    },
    rules: {
        "import/no-named-default": "off"
    }
}
