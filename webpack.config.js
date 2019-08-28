var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.js')    
    .enableVueLoader()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())    
;

module.exports = Encore.getWebpackConfig();
