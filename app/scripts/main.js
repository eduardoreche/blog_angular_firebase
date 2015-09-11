'use strict';

angular.module('blogApp', ['firebase', 'ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/');

    	$stateProvider//commons
	      .state('home', { 
	        url: '/',
	        templateUrl: 'views/main.html', 
	        controller: 'PostCtrl'
	      })
	      .state('entry', {
	      	url: '/entry',
	      	templateUrl: 'views/entry.html'
	      });

	});

