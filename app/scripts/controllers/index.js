'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the project1App
 */
angular.module('project1App')
    .controller('IndexCtrl', function($scope, $window, $location) {

    	$scope.hideDiv = true;
        $scope.$on('$locationChangeStart', function() {
            console.log($location.path());
            if ($location.path() === '/dashboard') {
                $scope.hideDiv = true;

            } else {
                $scope.hideDiv = false;
            }
        });
    });
