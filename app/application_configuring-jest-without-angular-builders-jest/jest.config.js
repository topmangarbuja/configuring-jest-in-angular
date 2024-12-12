/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  verbose: true
};

module.exports = config;
