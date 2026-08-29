/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  //coverage結果路徑
  coverageDirectory: "coverage",
  //執行物件
  preset: 'ts-jest',
  //測試環境, node or jsdom
  testEnvironment: 'jsdom',
  //檔案
  testMatch:[
    '<rootDir>/src/test/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  //執行檔案
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'cjs', 'mjs'],
  modulePathIgnorePatterns: ['<rootDir>/src/proto/*.*'],
  setupFilesAfterEnv: ['<rootDir>/src/test/envSetup.ts'],
  coveragePathIgnorePatterns: [
      "<rootDir>/src/proto/*.*"
  ],
  transform: {
    '^.+\\.tsx?$': ['ts-jest']
  },
  reporters: [
      'default',
      ['jest-junit', {
        outputDirectory: './coverage',
        outputName: 'junit.xml'
      }]
  ]
};