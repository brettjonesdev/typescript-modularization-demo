//This code imports underscore.js via AMD.
///<reference path="libs/underscore-int.d.ts"/>
import UnderscoreModule = module( "libs/underscore" );
var _:Underscore = UnderscoreModule._;

//$ is a global variable - declare keyword just lets TypeScript know it is there.
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