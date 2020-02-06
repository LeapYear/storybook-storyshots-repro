module.exports = {
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/(__test__|src)/**/*.test.ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    // Storyshots
    // https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core#configure-your-app-for-jest
    'json',
  ],
  globals: {
    'ts-jest': {
      tsConfig: {
        // https://github.com/kulshekhar/ts-jest/issues/777
        // https://itnext.io/great-import-schism-typescript-confusion-around-imports-explained-d512fc6769c2
        esModuleInterop: true,

        // jest/ts-jest.js configures `babelConfig`, which tells ts-jest to not override
        // `"module": "commonjs"``, needed because Jest uses commonjs
        // https://github.com/kulshekhar/ts-jest/blob/master/src/config/config-set.ts#L559-L562
        module: 'commonjs',
      },
    },
  },
}
