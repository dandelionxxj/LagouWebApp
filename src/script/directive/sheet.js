/**
 * Created by asussl on 2017/3/2.
 */
'use strict';
angular.module('app').directive('appSheet',[function(){
    return {
        restrict:'A',
        replace:true,
        scope:{
            list:'=',
            visible:'=',
            select:'&'
        },
        templateUrl:'view/template/sheet.html'
    };
}]);