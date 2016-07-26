angular.module('hello').filter('sayhello', function () {
	 /* body... */ 
	 return function(name) {
	 	 // body...  
	 	 return 'Hello, ' + name;
	 };
});