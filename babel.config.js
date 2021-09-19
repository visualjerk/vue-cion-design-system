module.exports = function (api) {
  const config = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins: ['@babel/plugin-syntax-dynamic-import'],
  }
  if (api.env('test')) {
    // mocks require.context() in test environment
    config.plugins.push('transform-require-context')
  }
  return config
}
