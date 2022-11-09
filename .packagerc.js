/** @type { import('npm-package-json-lint/dist/src/configuration').Config } */
const config = {
    rules: {
        'bin-type': 'error',
        'bundledDependencies-type': 'error',
        'config-type': 'error',
        'cpu-type': 'error',
        'dependencies-type': 'error',
        'description-format': [
            'error',
            {
                'requireCapitalFirstLetter': true,
                'requireEndingPeriod': false,
            },
        ],
        'description-type': 'error',
        'devDependencies-type': 'error',
        'directories-type': 'error',
        'engines-type': 'error',
        'files-type': 'error',
        'homepage-type': 'error',
        'keywords-type': 'error',
        'license-type': 'error',
        'main-type': 'error',
        'man-type': 'error',
        'name-format': 'error',
        'name-type': 'error',
        'no-absolute-version-dependencies': 'error',
        'no-absolute-version-devDependencies': 'error',
        'no-archive-dependencies': 'error',
        'no-archive-devDependencies': 'error',
        'no-file-dependencies': 'error',
        'no-file-devDependencies': 'error',
        'no-git-dependencies': 'error',
        'no-git-devDependencies': 'error',
        'no-repeated-dependencies': 'error',
        'no-restricted-dependencies': [
            'error',
            [
                'typeorm',
                'ramda',
                'lodash',
                '@types/*',
                'ts-node',
                'typescript',
            ],
        ],
        'optionalDependencies-type': 'error',
        'os-type': 'error',
        'peerDependencies-type': 'error',
        'prefer-alphabetical-bundledDependencies': 'error',
        'prefer-alphabetical-dependencies': 'error',
        'prefer-alphabetical-devDependencies': 'error',
        'prefer-alphabetical-optionalDependencies': 'error',
        'prefer-alphabetical-peerDependencies': 'error',
        'prefer-alphabetical-scripts': 'error',
        'preferGlobal-type': 'error',
        'private-type': 'error',
        'repository-type': 'error',
        'require-description': 'error',
        'require-license': 'error',
        'require-name': 'error',
        'require-private': 'error',
        'require-version': 'error',
        'scripts-type': 'error',
        'valid-values-license': [
            'error',
            [
                'MIT',
                'UNLICENSED',
            ],
        ],
        'version-format': 'error',
        'version-type': 'error',
    },
}

module.exports = config
