const path = require("node:path");

/** @type {import('jest').Config} */

const config = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: [path.resolve( __dirname, '../../../setup-jest.ts')]
};

module.exports = config;
