
'use strict';
angular.module('app').controller('favoriteCtrl',['$state','$http','$scope',
    function($state,$http,$scope){
    $http.get('data/myFavorite.json').then(function (resp) {
        $scope.list=resp.data;
    })

}]);