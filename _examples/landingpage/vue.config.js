module.exports = {
  outputDir: './docs',
  chainWebpack: (config) => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true,
    })
  },
}
