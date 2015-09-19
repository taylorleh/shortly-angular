angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.links = {};

  $scope.getLinks = function () {
    Links.getLinks(function (linkData) {
      $scope.links = linkData;
      console.log($scope);
    });
  };

  $scope.getLinks();
});
