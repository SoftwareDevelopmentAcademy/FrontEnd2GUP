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

app.controller('main', function($scope, $filter, filterFilter) {
    $scope.records = [
        { id: 1, name: 'polska', currency: "PLN" },
        { id: 2, name: 'niemcy', currency: "EUR" },
        { id: 3, name: 'rosja', currency: "RBL" },
        { id: 4, name: 'hiszpania', currency: "EUR" }
    ];
    
    $scope.show = function(currency) {
        var ret = $filter('filter')($scope.records, { currency: currency });
        console.log(ret);
    }
});

app.controller('first', function($scope, $http, $filter) {
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
            var deletedUser = $filter('filter')($scope.users, { id: id })[0];
            $scope.users.splice($scope.users.indexOf(deletedUser), 1);
        }, function(error) {
            console.log(error);
        });
    }
    
    
    $scope.edit = function(user) {
        console.log(user);
        if($scope.editId == user.id) {
            $http({
                url: 'http://localhost:3000/users/' + user.id,
                method: 'PUT',
                data: {
                    name: user.name,
                    lastname: user.lastname
                }
            }).then(function(s) {
                console.log(s);
            }, function(e) {
                console.error(e);
            });
            $scope.editId = null;
        } else {
            $scope.editId = user.id;
        }
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