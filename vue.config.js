const path = require('path')

// config at your vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@@/system/styles/shared.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.common',
        '@@': path.resolve(__dirname, './src')
      }
    },
    module: {
      rules: [
        {
          resourceQuery: /blockType=docs/,
          loader: require.resolve('./src/utils/docs-loader.js')
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .options({
        fix: true
      })
  }
}
