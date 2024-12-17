const path = require("node:path");

/** @type {import('jest').Config} */

const config = {
  collectCoverage: true,
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [path.resolve(__dirname,'../../../setup-jest.ts')],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  verbose: true
};

module.exports = config;
