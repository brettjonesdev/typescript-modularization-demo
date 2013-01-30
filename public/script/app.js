define(["require", "exports", "libs/underscore"], function(require, exports, __UnderscoreModule__) {
    var UnderscoreModule = __UnderscoreModule__;

    var _ = UnderscoreModule._;
    var App = (function () {
        function App() { }
        App.prototype.start = function () {
            var html = "";
            _.each([
                {
                    name: "jQuery",
                    url: "/script/libs/jquery-1.8.3.js",
                    descriptionUrl: "http://brettjonesdev.com/modularization-in-typescript/#staticImport",
                    loadingMechanism: "static global"
                }, 
                {
                    name: "underscore/lodash",
                    url: "/script/libs/lodash-1.0.0-rc3.js",
                    descriptionUrl: "http://brettjonesdev.com/modularization-in-typescript/#dynamicImport",
                    loadingMechanism: "dynamic"
                }
            ], function (library) {
                html += "<p>Loaded <a href='" + library.url + "'>" + library.name + "</a> via <a href='" + library.descriptionUrl + "'>" + library.loadingMechanism + "</a> mechanism.</p>";
            });
            $("#content").html(html);
        };
        return App;
    })();
    exports.App = App;    
})
