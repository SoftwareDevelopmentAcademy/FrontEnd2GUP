var app = angular.module('webapp', ['ngRoute']);
var baseAJAXUrl = 'http://localhost:3000/';

app.controller('mainController', function($scope, $http) {
    $http({
        url: baseAJAXUrl + 'subject',
        method: 'GET'
    }).then(function(success) {
        $scope.subjects = success.data;
    }, function(error) {
        console.error(error);
    });
});