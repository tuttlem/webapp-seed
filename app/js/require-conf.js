'use strict';

require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
    angular: '../bower_components/angular/angular',
    angularRoute: '../bower_components/angular-route/angular-route',
    ngstorage: '../bower_components/ngstorage/ngStorage.min',
    angularMD5: '../bower_components/angular-md5/angular-md5.min',
    angularJSOAuth2: '../bower_components/AngularJS-OAuth2/dist/angularJsOAuth2'
  },
  shim: {
    'bootstrap': [ 'jquery' ],
    'angular': {'exports': 'angular'},
    'angularRoute': ['angular'],
    'ngstorage': ['angular'],
    'angularMD5': ['angular'],
    'angularJSOAuth2': [ 'angular', 'ngstorage', 'angularMD5' ]
  },
  priority: [
    'angular'
  ],
  baseUrl: 'js',
});

require(['angular', 'app'], function(angular, app) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
      angular.bootstrap(document, ['seedApp']);
    });
  }
);
