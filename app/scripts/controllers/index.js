'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('IndexCtrl', function ($scope, $location) {
    	console.log($location.path());
  });
