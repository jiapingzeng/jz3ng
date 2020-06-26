module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_variables.scss";@import url('https://fonts.googleapis.com/css?family=Open+Sans');`
            }
        }
    }
}