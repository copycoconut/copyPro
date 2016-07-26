angular.module('hello').config([
	'$stateProvider',
	function ($stateProvider) {
		 /* body... */ 
		 $stateProvider
		 	.state('hello', {
		 		url: '/',
		 		templateUrl: '/modules/hello/views/hello.client.view.jade'
		 	});
	}]);