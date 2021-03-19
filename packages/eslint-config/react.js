/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'latest',
    },
  },
  rules: {
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    'prettier/prettier': 'warn',
  },
  ignorePatterns: 'dist',
};
