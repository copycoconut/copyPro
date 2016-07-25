'use strict';
var mainAppModuleName = 'Main';
var mainAppModule = angular.module(mainAppModuleName, ['hello']);

angular.element(document).ready(function() {
	 /* body... */ 
	 angular.bootstrap(document.querySelector('#mainApp'), [mainAppModuleName] , {
	 	strictDi: true
	 });
});

mainAppModule.controller('NameController',['$scope', '$http',  function ($scope, $http) {
	 /* body... */ 
	 $scope.yourName = 'No Name';
	 var user_json = $http.get('/user');
}]);

mainAppModule.filter('sayhello', function () {
	 /* body... */ 
	 return function (name) {
	 	 // body...  
	 	 return 'Hello, ' + name;
	 };
});

