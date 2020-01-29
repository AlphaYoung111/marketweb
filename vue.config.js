const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@common', resolve('src/common'))
      .set('@components', resolve('src/components'))
      .set('@pages', resolve('src/pages'))
      .set('@network', resolve('src/network'))
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 30
          }), // 换算的基数
        ]
      }
    }
  },
}