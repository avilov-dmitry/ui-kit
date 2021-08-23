module.exports = {
    roots: ['<rootDir>/src'],
    rootDir: '../',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.svg$": "jest-transform-stub"
    },
    verbose: true,
    clearMocks: true,
    setupFiles: ['<rootDir>/configs/enzime.config.js'],
    moduleNameMapper: {
        '^components': '<rootDir>/src/components',
        // '^constants': '<rootDir>/src/constants',
        '^styles': '<rootDir>/src/styles',
        '^.+.(css|less|scss|sass|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    },
    preset: 'ts-jest',
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}'
    ],
    cacheDirectory: '<rootDir>/cache/jest',
    coverageDirectory: '<rootDir>/coverage',
    coverageReporters: ['html'],
    testEnvironment: "jsdom"
};
