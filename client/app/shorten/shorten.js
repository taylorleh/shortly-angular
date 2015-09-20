angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function (data) {
    Links.addLink($scope.link)
      .then(function () {
        $location.path('/links');
      });
  };

});
