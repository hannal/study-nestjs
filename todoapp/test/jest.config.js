module.exports = {
  "rootDir": "../__tests__",
  "testEnvironment": "node",
  "moduleFileExtensions": ["js", "json", "ts"],
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "testRegex": "\\.spec.ts$",
  "coverageDirectory": "../coverage",
  "collectCoverageFrom": [
    "**/*.(t|j)s"
  ]
}
