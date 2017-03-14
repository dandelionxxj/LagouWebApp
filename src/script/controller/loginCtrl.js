
'use strict';
angular.module('app').controller('loginCtrl',['cache','$state','$http','$scope',
    function(cache,$state,$http,$scope){
    //angular1.6没有success方法了，所以改用用then
    $scope.submit=function () {
        $http.post('/data/login.json')
            .success(function(resp) {
              cache.put('id',resp.id);
                cache.put('name',resp.name);
                cache.put('image',resp.image);
                $state.go('main')
            })
    }
}]);