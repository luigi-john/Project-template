'use strict';

/**
 * @ngdoc overview
 * @name project1App
 * @description
 * # project1App
 *
 * Main module of the application.
 */
angular
  .module('project1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html'
      })
      .when('/helpdesk', {
        templateUrl: 'views/helpdesk.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/careers', {
        templateUrl: 'views/careers.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
