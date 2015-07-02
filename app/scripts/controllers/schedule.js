'use strict';

/**
 * @ngdoc function
 * @name project1App.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the project1App
 */
angular.module('project1App')
  .controller('ScheduleCtrl', function ($scope) {
    $scope.schedList = [
    	{boat:'B1',date:'2015-07-02',time:'1:00PM',appro:'2hrs',route:'Lucena',reg:'100',stud:'80',senior:'70',promo:'30'},
    	{boat:'B1',date:'2015-07-02',time:'1:00PM',appro:'2hrs',route:'Lucena',reg:'100',stud:'80',senior:'70',promo:'30'},
    	{boat:'B1',date:'2015-07-02',time:'1:00PM',appro:'2hrs',route:'Lucena',reg:'100',stud:'80',senior:'70',promo:'30'},
    	{boat:'B1',date:'2015-07-02',time:'1:00PM',appro:'2hrs',route:'Lucena',reg:'100',stud:'80',senior:'70',promo:'30'},
    	{boat:'B1',date:'2015-07-02',time:'1:00PM',appro:'2hrs',route:'Lucena',reg:'100',stud:'80',senior:'70',promo:'30'}
    ];
  });
