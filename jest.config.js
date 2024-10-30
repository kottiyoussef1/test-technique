module.exports = {
  testMatch: ["<rootDir>/src/**/*.test.js"],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};