const { defineConfig } = require('@vue/cli-service')
const backendIp = process.env.BACKEND_IP || '127.0.0.1';


module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: `http://${backendIp}:8081`, 
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
