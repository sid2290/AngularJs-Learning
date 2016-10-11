var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$scope', '$log','$filter', '$resource', function($scope, $log, $filter, $resource) {
    
    console.log($resource);
    
}]);