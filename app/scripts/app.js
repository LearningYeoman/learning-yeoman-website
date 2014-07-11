'use strict';

/**
 * @ngdoc overview
 * @name learningYeomanWebsiteApp
 * @description
 * # learningYeomanWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('learningYeomanWebsiteApp', [
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
      .otherwise({
        redirectTo: '/'
      });
  });
