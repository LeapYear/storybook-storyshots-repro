module.exports = ({ config }) => {
  const oldRules = config.module.rules
  config.module.rules = [
    {
      test: /\.tsx?$/,
      use: ['ts-loader'],
    },
  ]

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
