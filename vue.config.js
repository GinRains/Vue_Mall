module.exports = {
  devServer: {
    open: true,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  },
  lintOnSave: false
}
