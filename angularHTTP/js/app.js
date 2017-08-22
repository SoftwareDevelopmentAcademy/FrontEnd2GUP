var app = angular.module('webapp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
       templateUrl: './views/main.html',
        controller: 'first'
    })
    .when('/user/:id', {
        templateUrl: './views/user.html',
        controller: 'userController'
    });
});

app.controller('first', function($scope, $http) {
    // $http(/*obiekt konfiguracyjny*/)
    //    .then(/*success handler*/, 
    //          /*error handler*/);
    $http({
        method: "GET",
        url: "http://localhost:3000/users"
    }).then(function(success) {
        $scope.users = success.data;
    }, function(error) {
        console.error(error);
    });
});

app.controller('userController', function($scope, $http, $routeParams) {
    $http({
        url: 'http://localhost:3000/users/' + $routeParams.id,
        method: 'GET'
    }).then(function(success) {
        $scope.user = success.data;
    }, function(error) {
        console.error(error);
    });
});