export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  modulePathIgnorePatterns: ['<rootDir>/coverage/'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['<rootDir>/src/**/**.test.(ts|tsx)'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/App.tsx',
    '!<rootDir>/src/main.tsx',
    '!<rootDir>/src/styled.d.ts',
    '!<rootDir>/src/vite-env.d.ts',
    '!<rootDir>/src/context/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/enums/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/services/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/utils/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/contexts/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/hooks/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/routes/**/*.{js,jsx,ts,tsx}'
  ],
  moduleNameMapper: {
    '^@enums/(.*)$': '<rootDir>/src/enums/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
