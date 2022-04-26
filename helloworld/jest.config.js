module.exports = {
  "testEnvironment": "node",
  "moduleFileExtensions": ["js", "json", "ts"],
//  "testMatch": ['**/__tests__/**/*.spec.[jt]s'],
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "coverageDirectory": "../coverage",
  "collectCoverageFrom": [
    "**/*.(t|j)s"
  ]
}

