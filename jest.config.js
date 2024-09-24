/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  verbose: true,
  watchPathIgnorePatterns: ['/node_modules/']
};