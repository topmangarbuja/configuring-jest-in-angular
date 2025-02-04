# Configuring Jest using test builder in library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.
- It uses `@angular-builders/jest:run` test builder i.e. in `angular.json`, it is configured as:
  ```
  "architect": {
    "test": {
      "builder": "@angular-builders/jest:run",
    }
  }
  ```
- `package.json` looks as below:
  ```
  {
    "scripts": {
      "test": "ng test"
    }
  }
  ```

This project configures testing framework jest along with testing-library. The default testing framework Jasmine and test runner Karma are removed.
- Jest:
  - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
  - Reference: https://jestjs.io/, https://github.com/jestjs/jest
- Testing Library:
  - Simple and complete testing utilities.
  - It helps to test UI focusing on the behaviour (how users actually uses in browser) and avoids including implementation details.
  - It provides functions and api such as render(), screen, getBy queries, user actions etc.
  - Reference: https://testing-library.com/, https://github.com/testing-library/angular-testing-library
- Testing Library Jest-Dom:
  - It provides custom DOM element matchers for Jest such as toBeInTheDocument(), toBeVisible() etc.
  - These will make tests more declarative, clear to read and to maintain.
  - Reference: https://testing-library.com/docs/ecosystem-jest-dom/, https://github.com/testing-library/jest-dom

## Setup
While setting up jest, changes required are made in `angular.json, package.json, jest.config.js, setup-jest.ts, tsconfig.spec.json,`

After setting up jest, changes are made in `my-lib.component.spec.ts` to use testing-library apis and jest-dom matchers.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://github.com/jestjs/jest).
