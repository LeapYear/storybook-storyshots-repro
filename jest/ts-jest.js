/**
 * config.js for Storyshots uses require.context, which jest doesn't support
 *
 * https://github.com/storybookjs/storybook/issues/4479#issuecomment-440598441
 */
module.exports = require('ts-jest').createTransformer({
  babelConfig: {
    plugins: ['require-context-hook'],
  },
})
