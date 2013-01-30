require.config({
    baseUrl: "./script",
    paths: {
        'jquery' : 'libs/jquery-1.8.3'
    },
    shim: {
        'jquery': {
            exports: '$'
        }
    }
});

//jQuery is loaded via a script tag, but it could also be loaded just once via AMD, like so:
//require( ['jquery'], function(){});
require( ['app'], function(AppModule) {
    var App = AppModule.App;
    var app = new App();
    app.start();
});