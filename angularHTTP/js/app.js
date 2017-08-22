var app = angular.module('webapp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: './views/main.html',
        controller: 'main'
    })
    .when('/users', {
       templateUrl: './views/users.html',
        controller: 'first'
    })
    .when('/user/:id', {
        templateUrl: './views/user.html',
        controller: 'userController'
    })
    .when('/animals', {
        templateUrl: './views/animals.html',
        controller: 'animalsController'
    });
});

app.controller('main', function($scope) {
    
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
    
    $scope.add = function() {
        $http({
            url: 'http://localhost:3000/users',
            method: "POST",
            data: {
                name: $scope.name,
                lastname: $scope.lastname
            }
        }).then(function(success) {
            $scope.users.push(success.data);
            $scope.name = ''; 
            $scope.lastname = '';
        }, function(error) {
            console.error(error);
        });
    }
    
    $scope.delete = function(id) {
        $http({
            url: 'http://localhost:3000/users/' + id,
            method: 'DELETE'
        }).then(function(success) {
            
        }, function(error) {
            console.log(error);
        });
    }
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

app.controller('animalsController', function($scope, $http) {
    $http({
        url: 'http://localhost:3000/animals'
    }).then(function(success) {
        $scope.animals = success.data;
    }, function(error) {
        
    });
});