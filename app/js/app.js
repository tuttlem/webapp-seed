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

  /* important broadcast messages from afOAuth2
   * oauth2:authError
   * oauth2:authSuccess
   * oauth2:authExpired
   * oauth2:unauthorized
   * oauth2:internalservererror
   */
  
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

