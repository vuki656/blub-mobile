module.exports = {
    extends: ["@rimac-technology/eslint-config/core", "@rimac-technology/eslint-config/react"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json"
    },
}

