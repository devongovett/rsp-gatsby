// Based on https://www.eduard.work/adjust-css-minification-in-gatsby/
exports.onCreateWebpackConfig = ({
  actions,
  stage,
  plugins,
  getConfig
}) => {
  // override config only during
  // production JS & CSS build
  if (stage === 'build-javascript') {
    // get current webpack config
    const config = getConfig()
    // our new cssnano options
    // are still based on default preset
    const options = {
      cssProcessorPluginOptions: {
        preset: ['default',
          {
            calc: false
          }]
      }
    }
    // find CSS minimizer
    const minifyCssIndex = config.optimization.minimizer.findIndex(
      minimizer => minimizer.constructor.name ===
        'OptimizeCssAssetsWebpackPlugin'
    )
    // if found, overwrite existing CSS minimizer with the new one
    if (minifyCssIndex > -1) {
      config.optimization.minimizer[minifyCssIndex] =
        plugins.minifyCss(options)
    }
    // replace webpack config with the modified object
    actions.replaceWebpackConfig(config)
  }
}
