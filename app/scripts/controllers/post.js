'use strict';

angular.module('blogApp')

	.controller('PostCtrl', ['$scope', '$stateParams', '$state', 'Post', 
		function($scope, $stateParams, $state, Post) {

		$scope.posts = Post;

		//$scope.post = ($stateParams)


	}]);