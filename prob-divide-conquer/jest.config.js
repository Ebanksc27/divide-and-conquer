module.exports = {
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
    collectCoverage: true,
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    moduleNameMapper: {
      "^@components/(.*)$": "<rootDir>/src/components/$1"
    },
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    moduleDirectories: ["node_modules", "src"],
    coverageDirectory: "coverage"
  };
  