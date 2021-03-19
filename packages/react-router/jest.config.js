module.exports = {
  testMatch: ['**/__tests__/*-test.js'],
  transform: {
    '\\.js$': './jest-transformer.js',
  },
};
