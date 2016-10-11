// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope','$log', '$filter', function ($scope,$log,$filter) {
    
    console.log($scope);
    console.log($log);
    $log.log("Hello");
    $log.info("This is some information");
    $log.warn("Warning!!!");
    
    $scope.name = 'John';
    $scope.formatname = $filter('uppercase')($scope.name);
    console.log($scope.formatname);
}]);




