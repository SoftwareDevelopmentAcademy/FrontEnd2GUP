var app = angular.module('webapp', []);

app.controller('mainController', function($scope) {
    $scope.makeUser = function(name, lastname) {
        return { name: name, lastname: lastname }
    }
    
    $scope.users = [];
    for(var i = 0; i < 10; i++) {
        $scope.users.push($scope.makeUser("Justyna", "Testowa"));
    }
});