module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_variables.scss";`
            }
        }
    },
    chainWebpack: config => {
        config.module.rule('pdf').test(/\.pdf$/).use('file-loader').loader('file-loader')
    }
}