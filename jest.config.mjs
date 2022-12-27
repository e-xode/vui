export default {
    moduleFileExtensions: [
        'js',
        'mjs',
        'json',
        'vue'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    setupFiles: [
    ],
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons'],
    },
    testMatch: [
        '**/?(*.)+(spec).mjs'
    ],
    transform: {
        '^.+\\.m?js$': 'babel-jest',
        '^.+\\.vue$': '@vue/vue3-jest'
    },
    transformIgnorePatterns: [
        '/node_modules/'
    ]
}
