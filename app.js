var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$scope', '$log','$filter', '$resource', function($scope, $log, $filter, $resource) {
    
    console.log($resource);
    
    var tb = document.getElementById("name");
    
    console.log(tb);
    
    tb.addEventListener("keypress", function(event) {
            
            console.log("Key Pressed");
                        
    })
    
}]);