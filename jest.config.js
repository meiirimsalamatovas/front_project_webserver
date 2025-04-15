module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      "src/components/**/*.{js,jsx}",
      "!**/node_modules/**",
      "!**/*.test.{js,jsx}"
    ],
    coverageDirectory: "coverage",
    coverageReporters: ["html", "text-summary"],
    testEnvironment: "jsdom"
  };
  