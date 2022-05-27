/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  moduleNameMapper: {
    // src ディレクトリをエイリアスのルートに設定
    "^@/(.+)": "<rootDir>/src/$1",
    "^.+\\.tsx?$": "ts-jest",
    "^@test/(.*)$": "<rootDir>/tests/_helper/$1",
  },
  transform: {
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
    "^.+\\.svg$": "jest-svg-transformer",
  },
  testMatch: ["**/tests/**/*.spec.(js|jsx|ts|tsx)"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  globals: {
    // test 時に TypeScript の設定を一部変更して実行する設定
    "ts-jest": {
      tsconfig: "<rootDir>/tests/tsconfig.jest.json",
    },
  },
};
