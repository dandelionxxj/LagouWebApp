/**
 * Created by asussl on 2017/3/2.
 */
'use strict';
angular.module('app').controller('mainCtrl',['$http','$scope',function($http,$scope){
    //angular1.6没有success方法了，所以改用用then
    $http.get('/data/positionList.json')
        .then(function(res) {
            $scope.list = res.data;
        })
}]);