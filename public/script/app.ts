// This code imports underscore.js via AMD.
// This is an example of dynamically importing a JavaScript AMD module
///<reference path="libs/underscore-int.d.ts"/>
import UnderscoreModule = module( "libs/underscore" );
var _:Underscore = UnderscoreModule._;

// $ is a global variable loaded via script tag (could also be loaded once with AMD)
// declare keyword just lets TypeScript know it is there.
// This is an example of statically importing a library with help of Ambient Declaration ('declare var x')
///<reference path="libs/jquery.d.ts"/>
declare var $:JQueryStatic;
export class App {
   start() {
      var html:string = "";
      _.each( [{
            name: "jQuery",
            url: "/script/libs/jquery-1.8.3.js",
            descriptionUrl: "http://brettjonesdev.com/modularization-in-typescript/#staticImport",
            loadingMechanism: "static global"
         }, {
            name: "underscore/lodash",
            url: "/script/libs/lodash-1.0.0-rc3.js",
            descriptionUrl: "http://brettjonesdev.com/modularization-in-typescript/#dynamicImport",
            loadingMechanism: "dynamic"
         }
         ], function(library) {
         html += "<p>Loaded <a href='" + library.url + "'>" + library.name + "</a> via <a href='" + library.descriptionUrl + "'>" + library.loadingMechanism + "</a> mechanism.</p>";
      });
      $( "#content" ).html( html );
   }
}