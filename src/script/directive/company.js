/**
 * Created by asussl on 2017/3/2.
 */
'use strict';
angular.module('app').directive('appCompany',[function(){
    return {
        restrict:'A',
        replace:true,
        scope:{
            com:'='
        },
        templateUrl:'view/template/company.html'
    };
}]);