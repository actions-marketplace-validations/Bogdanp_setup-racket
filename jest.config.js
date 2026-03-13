/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      useESM: true,
    }]
  },
  transformIgnorePatterns: [
    'node_modules/(?!@actions/)'
  ],
  verbose: true
};
