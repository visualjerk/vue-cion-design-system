const path = require('path')

// config at your vue.config.js
module.exports = {
  outputDir: path.resolve(__dirname, "./docs"),
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@@/styles/shared.scss";`
      }
    }
  },
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.common',
        '@@': path.resolve(__dirname, './src/system')
      }
    },
    module: {
      rules: [
        {
          resourceQuery: /blockType=docs/,
          loader: require.resolve('./src/loader/docs-loader.js')
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
