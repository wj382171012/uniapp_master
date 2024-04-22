module.exports = {
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/testChatGPT': {
                target: 'http://47.96.232.53:8081',
                changeOrigin: true,
                secure: false,
                ws: true,
                pathRewrite: {
                    '^/testChatGPT': ''
                }
            }
        }
    }
}
