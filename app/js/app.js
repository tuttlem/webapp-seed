'use strict';

define([ 
  'angular', 
  'angularRoute', 
  'controllers',
  'filters',
  'services',
  'directives',
  'angularJSOAuth2'
], function (angular) {

  var seedApp = angular.module('seedApp', [
    'ngRoute',
    'seedControllers',
    'seedFilters',
    'seedServices',
    'afOAuth2'
  ]);

  seedApp.config([ '$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController',
        requireToken: true
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

});

