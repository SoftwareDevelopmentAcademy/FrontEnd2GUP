var app = angular.module('webapp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
       templateUrl: './views/main.html',
        controller: 'first'
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