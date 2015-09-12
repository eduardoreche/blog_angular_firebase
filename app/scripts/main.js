'use strict';

angular.module('blogApp', ['firebase', 'ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/');

    	$stateProvider
    	  .state('posts',{
    	  	url: '',
    	  	template: '<div ui-view></div>',
    	  	controller: 'PostCtrl',
    	  	abstract: true
    	  })
	      .state('posts.home', { 
	        url: '/',
	        templateUrl: 'views/main.html'
	      })
	      .state('posts.entry', {
	      	url: '/entry/:id',
	      	templateUrl: 'views/entry.html'
	      });

	});

