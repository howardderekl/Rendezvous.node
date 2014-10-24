(function () {
    'use strict';
    angular.module('prettyPhoto', []).directive('prettyp', function(){
        return function(scope, element, attrs) {
            $("[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, social_tools: false, theme:'dark_rounded'});
        }
    });
}());