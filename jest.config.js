/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/tests"],
  moduleNameMapper: {
    // src ディレクトリをエイリアスのルートに設定
    "^@/(.+)": "<rootDir>/src/$1",
    // test 時に CSS ファイルを読み込まないようにする設定
    "\\.css$": "<rootDir>/node_modules/jest-css-modules",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  globals: {
    // test 時に TypeScript の設定を一部変更して実行する設定
    "ts-jest": {
      tsConfig: {
        jsx: "react",
      },
    },
  },
};
