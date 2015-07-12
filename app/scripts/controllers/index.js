'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the project1App
 */
angular.module('project1App')
    .controller('IndexCtrl', function($scope, $location, $rootScope) {
        $scope.location = $location.path();

        $rootScope.$apply(function(){
        	console.log($location.path());
        });
    });
