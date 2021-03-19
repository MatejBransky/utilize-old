module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  testMatch: ['**/__tests__/*-test.js'],
  transform: {
    '^.+\\.(tsx|ts|js)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@utilize/react-router-dom$': '<rootDir>/src',
    '^@utilize/react-router-dom\\/server$': '<rootDir>/server.tsx',
  },
};
