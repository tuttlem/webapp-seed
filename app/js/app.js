'use strict';

define([ 
  'angular', 
  'angularRoute', 
  'controllers',
  'filters',
  'services',
  'directives' 
], function (angular) {

  var seedApp = angular.module('seedApp', [
    'ngRoute',
    'seedControllers',
    'seedFilters',
    'seedServices'
  ]);

  seedApp.config([ '$routeProvider', function ($routeProvider) {

    $routeProvider.otherwise({
      redirectTo: '/'
    });

  }]);

});

