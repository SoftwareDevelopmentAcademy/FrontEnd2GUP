var app = angular.module('webapp', []);

app.controller('mainController', function($scope, $http) {
    $scope.makeUser = function(name, lastname) {
        return { name: name, lastname: lastname }
    }
    
    $scope.getRandomItemFromArray = function(array) {
        var r = Math.round(Math.random() * (array.length - 1));
        return array[r];
    }
    /* 1. Pobierzmy wszystkie zasoby z bazy danych - /db
        - zasoby, ktore zostaną zwrócone, przypiszmy do $scope.resources */
    $http({
        method: 'GET',
        url: 'http://localhost:3000/db'
    }).then(function(success) {
        $scope.resources = success.data;
        $scope.loadData('');
    }, function(error) {
        
    }); 
    
    $scope.loadData = function(sex) {
        var gender;
        $scope.users = [];
        for(var i = 0; i < 10; i++) {
            if(sex === '') {
                var r = Math.round(Math.random()); // <0, 1>
                gender = (r === 0) ? 'male' : 'female';
            } else {
                gender = sex;
            }
            var name = $scope.getRandomItemFromArray($scope.resources[gender + '_name']);
            var lastname = $scope.getRandomItemFromArray($scope.resources[gender + '_lastname']);
            $scope.users.push($scope.makeUser(name, lastname));
        }    
    }
    
    
    
});