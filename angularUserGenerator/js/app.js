var app = angular.module('webapp', []);

app.controller('mainController', function($scope) {
    $scope.makeUser = function(name, lastname) {
        return { name: name, lastname: lastname }
    }
/*
1. Pobierzmy wszystkie zasoby z bazy danych - /db
    - zasoby, ktore zostaną zwrócone, przypiszmy do $scope.resources
2. Przy generowaniu losowego użytkownika  (w forze wypełniającym $scope.users) wylosujmy dane (imię i nazwisko).
    - najpierw ustalmy płeć użytkownika, którego chcemy wypełnić
        > losujemy liczbe <0, 1>
        > następnie przypisujemy do zmiennej var sex; wartość 'male' w przypadku 0, 'female' w przypadku 1
        > gdy chciałbym wylosować imiona i nazwiska żeńskie:
            - sex + '_name', sex + '_lastname'

*/
    
    
    $scope.users = [];
    for(var i = 0; i < 10; i++) {
        $scope.users.push($scope.makeUser("Justyna", "Testowa"));
    }
});