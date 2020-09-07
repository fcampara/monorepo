module.exports = {
  clearMocks: true,
  coverageDirectory: './coverage',
  preset: 'ts-jest',
  projects: ['<rootDir>/packages/**/jest.config.js'],
  testMatch: ['*.spec.ts', '*.spec.tsx'],
}
