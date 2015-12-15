'use strict';

define(['angular'], function (angular) {
  var seedControllers = angular.module('seedControllers', []);

  seedControllers.controller('HomeController', ['$scope', 'AccessToken', function ($scope, AccessToken) {
    console.log(AccessToken.token);
  }]);
  
});

