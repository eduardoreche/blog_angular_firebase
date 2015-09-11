'use strict';

angular.module('blogApp')

	.controller('PostCtrl', ['$scope', 'Post', function($scope, Post) {

		$scope.posts = Post;

	}]);