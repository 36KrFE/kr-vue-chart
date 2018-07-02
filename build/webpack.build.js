'use strict'
const webpack = require('webpack')
const config = require('./webpack.base.conf')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// 修改入口文件
config.entry = {
  'krVueChart': './src/index.es.js'
}
// 修改输出目录
config.output = {
  filename: './lib/[name].min.js',
  library: 'kr-vue-chart',
  libraryTarget: 'umd'
}
// 配置externals选项
config.externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}
// 配置plugins选项
config.plugins = [
  new webpack.DefinePlugin({
    'process.env': require('../config/prod.env')
  }),
  new UglifyJsPlugin({
    uglifyOptions: {
      compress: {
        warnings: false
      }
    },
    parallel: false
  })
]
// 删除devtool配置
delete config.devtool

module.exports = config