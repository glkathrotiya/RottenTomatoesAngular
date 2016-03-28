(function() {

  var app = angular.module("movieViewer", []);

  var MainController = function($scope, $http) {
   
   var apikey = "qwgqtm5rwfv2wgp9etr83hap";
    var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";
    var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;

    var onSearchComplete = function(response) {
      $scope.movieList = response.movies;
    };

    var onError = function() {
      $scope.error = "Could not fetch the data";
    };



    $scope.search = function(movieName) {

      $.ajax({
        url: moviesSearchUrl + '&q=' + movieName,
        dataType: "jsonp",
        success: onSearchComplete,
        error: onError
      });
    };


    $scope.message = "Movie viewer";
  };

  app.controller("MainController", ["$scope", "$http", MainController]);

}());