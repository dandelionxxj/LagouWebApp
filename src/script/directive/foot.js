/**
 * Created by asussl on 2017/3/2.
 */
'use strict';
angular.module('app').directive('appFoot',[function(){
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/foot.html'
    }
}]);