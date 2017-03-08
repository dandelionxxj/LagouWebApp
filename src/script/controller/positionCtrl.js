/**
 * Created by asussl on 2017/3/2.
 */
'use strict';
angular.module('app').controller('positionCtrl',['cache','$q','$http','$state','$scope','$log',function(cache,$q,$http,$state,$scope,$log){
    $scope.isLogin=!!cache.get('name');
    $scope.message=$scope.isLogin?'投个简历':'去登录';
    function getPosition() {
        var def=$q.defer();
        $http.get('/data/position.json?id=',{
            params:{
                id:$state.params.id}
        }).then(function (resp) {
                $scope.position=resp.data;
                if(resp.posted){
                    $scope.message='已投递';
                }
                def.resolve(resp.data);
            },function (err) {
                def.reject(err);
            });
        return def.promise;
    }
    function getCompany(id) {
        $http.get('data/company.json?id='+id)
            .then(function (resp) {
            $scope.company=resp.data;
        })
    }
    getPosition().then(function (obj) {
        // console.log(obj);
        getCompany(obj.companyId)
    });
    $scope.go=function () {
        if($scope.message!='已投递'){
            if($scope.isLogin){
                $http.post('data/handle.json',{
                    id:$scope.position.id
                }).success(function (resp) {
                    $log.info(resp);
                    $scope.position.state=resp.state;
                    $scope.message='已投递';
                })
            }else {
                $state.go('login');
            }
        }
    }
}]);