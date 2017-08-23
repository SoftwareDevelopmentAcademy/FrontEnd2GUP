var app = angular.module('webapp', ['ngRoute']);
var baseAJAXUrl = 'http://localhost:3000/';

app.controller('mainController', function($scope, $http) {
    // kod, ktory sie wykona od razu po uruchomieniu kontrolera
    
    $http({
        url: baseAJAXUrl + 'subject',
        method: 'GET'
    }).then(function(success) {
        $scope.subjects = success.data;
    }, function(error) {
        console.error(error);
    });
    
    $scope.actualEditId = null;
    // kod, ktory sie wykona po wywolaniu funkcji edit
    $scope.edit = function(subject) {
        if($scope.actualEditId != subject.id) {
            $scope.actualEditId = subject.id;
        } else {
            //alert("Ten element już jest edytowany!");
            $http({
                url: baseAJAXUrl + 'subject/' + subject.id,
                method: 'PUT',
                data: subject
            }).then(function(success) {
                console.log(success.data);
                $scope.actualEditId = null;
            }, function(error) {
                console.error(success.error);
            });
        }
    }
    
    $scope.tryEdit = function(keyCode, subject) {
        if(keyCode === 13) {
            $scope.edit(subject);
        }
    }
    
});
