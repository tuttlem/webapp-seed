'use strict';

require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': [ 'jquery' ],
  },
  priority: [ ],
  baseUrl: 'js',
});

require(['app'], function(app) {
   
});
