var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
    .when('/', {
        templateUrl: './views/main.html'
    })
    .when('/add', {
        templateUrl: './views/add.html',
        controller: 'first'
    })
    .when('/show', {
       templateUrl: './views/show.html',
       controller: 'second'
    })
    .when('/delete/:id', {
        template: '',
        controller: 'deleteMovieController'
    })
    .when('/other', {
        template: '<h3>Cześć, tutaj jest coś innego</h3>'
    });
});

app.service('movie', function() {
    this.movies = [
        { id: 1, title: 'pierwszy tytul', year: 2000, genre: 'to jest dramat' },
        { id: 2, title: 'drugi tytul', year: 2001, genre: 'to jest dramat' },
        { id: 3, title: 'trzeci tytul', year: 2002, genre: 'to jest komediodramat' }
    ];
    this.counter = this.movies.length + 1;
    this.add = function(movie) {
        movie.id = this.counter++;
        this.movies.push(movie);
    }
    this.get = function() {
        return this.movies;
    }
    this.deleteById = function(id) {
        for(var i = 0; i < this.movies.length; i++) {
            if(this.movies[i].id == id) {
                break;
            }
        }
        this.movies.splice(i, 1);
    }
});

app.controller('first', function($scope, movie) {
    $scope.add = function() {
        movie.add({ title: $scope.title, year: $scope.year, genre: $scope.genre });
    }
});

app.controller('second', function($scope, movie) {
    $scope.movies = movie.get();
    $scope.delete = function(id) {
        movie.deleteById(id);
    };
});


app.controller('deleteMovieController', function($scope, $routeParams, movie, $location) {
    movie.deleteById($routeParams.id);
    $location.path('/show');
});