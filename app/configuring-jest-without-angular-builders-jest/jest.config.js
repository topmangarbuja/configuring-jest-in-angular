/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts']
};

module.exports = config;
