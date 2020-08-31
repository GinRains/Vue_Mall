module.exports = {
  devServer: {
    open: true,
    hot: true,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://182.92.128.115",
        changeOrigin: true
      }
    }
  },
  lintOnSave: false
}
