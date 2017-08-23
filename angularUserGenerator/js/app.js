var app = angular.module('webapp', []);

app.controller('mainController', function($scope) {
    function makeUser(name, lastname) {
        return { name: name, lastname: lastname }
    }
    $scope.users = [];
    for(var i = 0; i < 10; i++) {
        $scope.users.push(makeUser("Justyna", "Testowa"));
    }
});