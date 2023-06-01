const esModules = ['react-merge-refs', 'swiper'].join('|')

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        'react-merge-refs': '<rootDir>/config/jest.reactMergeRefMock.js',
        '\\.svg$': '<rootDir>/config/jest.svgMock.js',
        '\\.(css|less|jpg|jpeg)$': '<rootDir>/config/styleMock.js',
        // 'units-converter': '<rootDir>/config/jest.moduleMock.js',
    },
    clearMocks: true,
    collectCoverage: false,
    rootDir: process.cwd(),
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!node_modules/**'],
    coverageReporters: ['json', 'text', 'lcov', 'clover', 'cobertura'],
    moduleDirectories: ['node_modules'],
    modulePaths: ['<rootDir>'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    resetMocks: true,
    setupFiles: ['react-app-polyfill/jsdom'],
    setupFilesAfterEnv: ['<rootDir>/config/jest.setup.ts'],
    snapshotSerializers: ['@emotion/jest/serializer'],
    testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
    testResultsProcessor: 'jest-sonar-reporter',
    transform: {
        '^.+.(js|jsx|ts|tsx)$': ['babel-jest'],
    },
    verbose: true,
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
}
