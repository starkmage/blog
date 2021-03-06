const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
//要压缩的代码类型
const productionGzipExtensions = ['js', 'css']

module.exports = {
  outputDir: __dirname + '/../server/web',
  publicPath: process.env.NODE_ENV === 'production' ?
  '' : '/',
  //不出现map文件，
  //map文件的作用：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
  productionSourceMap: false,
  // 一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack(config) {
    //最小化代码
    config.optimization.minimize(true)
    //分割代码，抽离公共文件
    config.optimization.splitChunks({
      chunks: 'all'
    })
    //压缩图片
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOndebug: true
      })
      .end()
  },
  configureWebpack(config) {
    // config.externals = {
    //   'vue': 'Vue',
    //   'vue-router': 'VueRouter',
    //   'element-ui': 'ElementUI',
    //   'axios': 'axios',
    //   'jquery': '$'
    // }
    if (process.env.NODE_ENV === 'production') {
      //给生产环境修改配置
      return {
        //去除控制台console.log痕迹
        optimization: {
          minimizer: [
            new TerserPlugin({
              sourceMap: true, // Must be set to true if using source-maps in production
              terserOptions: {
                compress: {
                  drop_console: true,
                },
              },
            }),
          ],
        },
        plugins: [
          //压缩优化
          new CompressionWebpackPlugin({
            algorithm: 'gzip',
            // test：处理与此RegExp相匹配的所有资产
            test: new RegExp(`\\.(${productionGzipExtensions.join('|')})$`),
            // threshold：只处理大于此大小的资产。以字节为单位 默认为0
            threshold: 10240,
            // minRatio：只有压缩得更好的资产才能处理这个比率。默认为0.8
            minRatio: 0.8
          })
        ]
      }
    }
  }
}