'use strict';

require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
    angular: '../bower_components/angular/angular',
    angularRoute: '../bower_components/angular-route/angular-route'
  },
  shim: {
    'bootstrap': [ 'jquery' ],
    'angular': {'exports': 'angular'},
    'angularRoute': ['angular']
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