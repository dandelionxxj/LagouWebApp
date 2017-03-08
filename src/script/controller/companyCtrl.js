/**
 * Created by asussl on 2017/3/2.
 */
'use strict';
angular.module('app').controller('companyCtrl',['$http','$state','$scope',function($http,$state,$scope){
    $http.get('data/company.json?id='+$state.params.id)
        .then(function (resp) {
        $scope.company=resp.data;
    })

}]);