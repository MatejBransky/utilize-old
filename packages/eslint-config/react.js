/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'prettier', 'plugin:prettier/recommended'],
  settings: {
    react: {
      version: 'latest',
    },
  },
  rules: {
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-use-before-define': 'off',
    'prettier/prettier': 'warn',
  },
  ignorePatterns: 'dist',
};
