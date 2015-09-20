angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function () {
    Links.getLinks()
      .then(function (res) {
        $scope.data.links = res;
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  $scope.getLinks();
});
