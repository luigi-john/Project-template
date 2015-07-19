'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:SideNavCtrl
 * @description
 * # SideNavCtrl
 * Controller of the project1App
 */
angular.module('project1App')
    .controller('SideNavCtrl', function($scope) {
        $scope.linkList = [{
            link: 'index',
            title: 'Home'
        }, {
            link: 'schedule',
            title: 'Schedule & Price'
        }, {
            link: 'about',
            title: 'About Us'
        }, {
            link: 'helpdesk',
            title: 'Helpdesk'
        }, {
            link: 'contact',
            title: 'Contact Us'
        }, {
            link: 'careers',
            title: 'Careers'
        }, ];
    });

angular.module('project1App')
    .controller('DashboardSideNavCtrl', function($scope) {
        $scope.dashboardLinkList = [{
            link: 'dashboard',
            title: 'Home',
            icon: 'home'
        }, {
            link: 'dashboard.inbox',
            title: 'Inbox',
            icon: 'inbox'
        }, {
            link: 'dashboard.schedule',
            title: 'Schedule',
            icon: 'event_note'
        }, {
            link: 'dashboard.ships',
            title: 'Ships',
            icon: 'directions_boat'
        }, {
            link: 'dashboard.news',
            title: 'News',
            icon: 'cast'
        }];
    });
