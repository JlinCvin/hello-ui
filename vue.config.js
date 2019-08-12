// vue.config.js
const webpack = require("webpack");

module.exports = {
  publicPath:"./",
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
    devServer: {
        // port: 8888,
        // ...
    },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({// 将 $ 变成全局变量
        $: 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default'] // bootstrap 中的一些组件依赖
      })
    ]
  }
};
