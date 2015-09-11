'use strict';

angular.module('blogApp')
	.factory('Post', ['$firebaseArray', function($firebaseArray) {

		var ref = new Firebase('https://recheblog.firebaseio.com/posts');

		return $firebaseArray(ref);

	}]);