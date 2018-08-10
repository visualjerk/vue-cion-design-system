// config at your vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.common'
      }
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'markdown-loader',
              options: {
                /* your options here */
              }
            }
          ]
        },
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
