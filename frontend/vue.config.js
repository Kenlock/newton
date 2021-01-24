module.exports = {
    css: {
        requireModuleExtension: false,
        loaderOptions: {
            sass: {
                data: `@import  "@/src/assets/styles/_app.sass";`,
            },
        },
    },
};
