module.exports = ({ config }) => {
  const oldRules = config.module.rules
  config.module.rules = [
    {
      test: /\.tsx?$/,
      use: ['ts-loader'],
    },
    // css loader
    oldRules[2],
  ]

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
