// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        targert: "http://localhost:5000",
        changeOrigin: true,
        loglevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
